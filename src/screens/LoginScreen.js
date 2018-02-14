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
  Platform
} from 'react-native'

import { resetTo } from '../navigators/navigationActions'

const deveryscreen = require("./../images/img/deveryscreen-svg.png");
const loading = require("./../images/img/loading.gif");

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: "#fff"
  },
  logoContainer: {
    flex: 1,
    marginTop: 30,
    marginBottom: 30
  },
  logo: {
    position: "absolute",
    left: Platform.OS === "android" ? 75 : 50,
    top: Platform.OS === "android" ? 35 : 60,
    width: 200,
    height: 50,
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
    flex: 1,
    flexDirection: 'column',
    width: '100%'
  },
  footerText: {
    marginTop: 10, 
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
  }

});

class LoginScreen extends React.Component {

  constructor() {
    super();

    this.state = {
      tokenInput: ''
    }
  }

  toHomeScreen = () => this.props.navigation.dispatch(resetTo({ routeName: 'MainDrawer' }))
  changeToken = (e) => this.setState({tokenInput: e.target.value})
  
  render () {
    return (
        <ImageBackground style={styles.imageContainer}>
          <View style={styles.logoContainer}>
            <ImageBackground source={deveryscreen} style={styles.logo} />
          </View>
          <View style={styles.footer}>
            <Text h3 style={{ color: '#1b2979', textAlign: 'center', fontSize: 24 }}>Enter the code to check for authenticity!</Text>
            <TextInput
              style={ styles.inputBox }
              placeholder=""
              underlineColorAndroid="transparent"
              onChange={(e) => this.changeToken(e)}
              value={this.state.tokenInput} />
            <View style={{marginLeft: 30, marginRight: 30}}>
              <Button
                block
                onPress={() => this.toHomeScreen()}
                color="#00d8aa"
                title="Verify"
              >
              </Button>
            </View>
            <Text style={styles.footerText} >Enter 0xc72DEa9c19D6a056B57eaA0B70Bc5e8d2c7FF148 to demo the product check. This demo serves as a proof of concept is not connected to the blockchain.</Text>
          </View>
        </ImageBackground>
    )
  }
}

export default LoginScreen
