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

import Exponent, { Constants, ImagePicker, registerRootComponent } from 'expo';
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
      tokenInput: '',
      isLoaded: false,
      image: ''
    }

    this.web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.etherscan.io'));
  }

  toHomeScreen = () => {
    if (this.web3.isAddress(this.state.tokenInput)) {
      this.props.navigation.dispatch(navigate({ 
        routeName: 'MainDrawer', 
        params: {token: this.state.tokenInput, logoImage: this.state.image} 
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

  toQRScreen = () => {
    console.log('to QR code: ', this.state)
    this.props.navigation.dispatch(navigate({ 
      routeName: 'QRScreen',
      params: {logoImage: this.state.image}
    }))
  }
  changeToken = (text) => this.setState({tokenInput: text})
  // pick image from phone
  _pickImage = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    this._handleImagePicked(pickerResult);
  };

  // save image uri in login component and home component
  _handleImagePicked = async pickerResult => {
    try {
      this.setState({ isLoaded: true });

      if (!pickerResult.cancelled) {
        this.setState({ image: pickerResult.uri });
      }
    } catch (e) {
      alert('Upload failed, sorry :(');
      this.setState({ isLoaded: false });
    } finally {
    }
  };
  
  render () {
    let logoImage = [];

    if (this.state.image != '') {
      logoImage.push(
        <Image source={{ uri: this.state.image }}  style={styles.logo} key="imageLogo" />
      )
    } 
    // else {
    //   logoImage.push(
    //     <Image source={{ uri: this.state.image }}  style={styles.logo} key="imageLogo" />
    //   )
    // }

    return (
        <ImageBackground style={styles.imageContainer}>
          <View style={styles.logoContainer}>
            { 
              this.state.isLoaded
                ? logoImage
                : null
            }
          </View>
          <TouchableOpacity 
            style={styles.uploadContainer}
            onPress={this._pickImage}>
            <Image 
              source={uploadImageIcon} 
              style={styles.uploadIcon} />
          </TouchableOpacity>
          
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
