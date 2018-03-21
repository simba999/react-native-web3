import React from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground,
  ScrollView,
  AppRegistry,
  Text,
  Button,
  Image,
  TextInput,
  Platform,
  Alert,
  ActivityIndicator,
  Clipboard,
  Share,
  StatusBar
} from 'react-native'

import { 
    Asset, 
    AppLoading } 
from 'expo';

import Web3 from 'web3'
import { resetTo, setParamsAction, navigate } from '../navigators/navigationActions'
import 'babel-preset-react-native-web3/globals';

const deveryscreen = require("./../images/img/deveryscreen-svg.png");
const loading = require("./../images/img/loading.gif");
const uploadImageIcon = require("./../images/img/upload-icon.jpg");


class LoginScreen extends React.Component {

  constructor() {
    super();

    this.state = {
      tokenInput: '',         // input value which users type QR code
      isLoaded: false         // variable to check if app is loaded or not
    }

    this.web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.etherscan.io'));
  }

  // route navigate to Home page
  toHomeScreen = () => {
    if (this.web3.isAddress(this.state.tokenInput)) {
      this.props.navigation.dispatch(navigate({ 
        routeName: 'MainDrawer', 
        params: {token: this.state.tokenInput} 
      }))  
    } else {
      let msg = 'address is not correct'
      if (this.state.tokenInput == '') msg = 'Please, enter contract address'
      Alert.alert(
        'This Contract is invalid.',
        msg,
        [
          {
            text: 'Ok',
            onPress: () => {},
            style: 'cancelBtn'
          }
        ],
        { cancellable: false }
      );
    }
  }

  // route navigate to QR scanner page
  toQRScreen = () => {
    this.props.navigation.dispatch(navigate({ 
      routeName: 'QRScreen'
    }))
  }

  // update value when users type in code
  changeToken = (text) => this.setState({tokenInput: text})

  // download and cache the images before app is loading
  async _cacheResourcesAsync() {
    const images = [
      require('./../images/img/deveryscreen-svg.png'),
      require('./../images/img/loading.gif'),
      require("./../images/img/upload-icon.jpg")
    ];

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });
    setTimeout(() => {
      return Promise.all(cacheImages)  
    }, 500)
    

  }
  
  render () {
    if (!this.state.isLoaded) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isLoaded: true })}
          onError={console.warn}
        />
      );
    } else {
      return (
        <ImageBackground style={styles.imageContainer}>
          <View style={styles.logoContainer}>
            <Image source={deveryscreen}  style={styles.logo} key="imageLogo" />
          </View>
          <View style={styles.footer}>          
            <Text h3 style={{ color: '#1b2979', textAlign: 'center', fontSize: 24 }}>Enter the code to check for authenticity!</Text>
            
            <TextInput
              style={ styles.inputBox }
              placeholder=""
              underlineColorAndroid="transparent"
              onChangeText={(text) => this.changeToken(text)}
              value={this.state.tokenInput}
              numberOfLine={5}
            />
            
            <View style={{marginLeft: 30, marginRight: 30}}>
              <Button
                onPress={() => this.toHomeScreen()}
                color="#00d8aa"
                title="Verify"
              >
              </Button>

              <Text style={styles.footerText} > Or scan the QR code to verify the item. </Text>
              
              <Button
                  onPress={() => this.toQRScreen()}
                  color="#00d8aa"
                  title="QR scanner"
                  style={styles.qrBtn}
                >
                </Button>              
            </View>
          </View>
        </ImageBackground>
      )
    }
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoContainer: {
    flex: 1,
    marginTop: 30,
    marginBottom: 30
  },
  logo: {
    position: "relative",
    // left: Platform.OS === "android" ? 100 : 90,
    top: Platform.OS === "android" ? 55 : 60,
    width: 150,
    height: 40,
    opacity: 0.3
  },
  text: {
    color: "#D8D8D8",
    bottom: 6,
    marginTop: 5
  },
  inputBox: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 30,
    marginRight: 30,
    height: 40,
    borderColor: "rgba(120,115,156,.5)",
    borderWidth: 1,
    borderRadius: 6,
    fontSize: 22,
    color: '#1b2979'
  },
  sendTokenBtn: {
    backgroundColor: "#00d8aa",
    alignSelf: "center",
    marginLeft: 20,
    marginRight: 20
  },
  footer: {
    flex: 2,
    flexDirection: 'column',
    width: '100%',
    marginTop: -50
  },
  footerText: {
    marginTop: 10,
    marginBottom: 10,
    color: '#1b2979', 
    textAlign: 'center', 
    fontSize: 12,
    paddingLeft: 10,
    paddingRight: 10
  },
  splashContainer: {
    flex: 1
  },
  loading: {
    width: 60,
    height: 60
  },
  qrBtn: {
    marginTop: 45,
    paddingTop: 15
  },
  cancelBtn: {
    textAlign: 'center',
    justifyContent: 'center'
  },
  uploadIcon: {
    // borderRadius: 50,
    height: 40,
    width: 40,
    position: "relative",
    alignItems: 'center',
    overflow: 'visible'
  },
  uploadContainer: {
    position: "absolute",
    top: Platform.OS === "android" ? 30 : 30,
    right: Platform.OS === "android" ? 20 : 20,
    backgroundColor: 'white'
  }

});

export default LoginScreen
