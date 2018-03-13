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

import { resetTo, setParamsAction, navigate } from '../navigators/navigationActions'
import 'babel-preset-react-native-web3/globals';

const deveryscreen = require("./../images/img/deveryscreen-svg.png");
const loading = require("./../images/img/loading.gif");


class LoginScreen extends React.Component {

  constructor() {
    super();

    this.state = {
      tokenInput: ''
    }
  }

  componentDidMount() {
    // let abiArray = [{"constant":true,"inputs":[{"name":"item","type":"address"}],"name":"addressHash","outputs":[{"name":"hash","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"brandAccounts","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"productAccount","type":"address"},{"name":"description","type":"string"},{"name":"details","type":"string"},{"name":"year","type":"uint256"},{"name":"origin","type":"string"},{"name":"active","type":"bool"}],"name":"updateProduct","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"productAccountsLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"marker","type":"address"},{"name":"permission","type":"bool"}],"name":"permissionMarker","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"apps","outputs":[{"name":"appAccount","type":"address"},{"name":"appName","type":"string"},{"name":"feeAccount","type":"address"},{"name":"active","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"removeAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"isAdmin","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"productAccounts","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"brandAccount","type":"address"}],"name":"getBrandData","outputs":[{"name":"appAccount","type":"address"},{"name":"appFeeAccount","type":"address"},{"name":"active","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"brandAccount","type":"address"}],"name":"getBrand","outputs":[{"components":[{"name":"brandAccount","type":"address"},{"name":"appAccount","type":"address"},{"name":"brandName","type":"string"},{"name":"active","type":"bool"}],"name":"brand","type":"tuple"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"admins","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"appAccountsLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"brandAccount","type":"address"},{"name":"brandName","type":"string"},{"name":"active","type":"bool"}],"name":"updateBrand","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"appAccounts","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"brands","outputs":[{"name":"brandAccount","type":"address"},{"name":"appAccount","type":"address"},{"name":"brandName","type":"string"},{"name":"active","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"appAccount","type":"address"}],"name":"getAppData","outputs":[{"name":"feeAccount","type":"address"},{"name":"active","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"appName","type":"string"},{"name":"feeAccount","type":"address"}],"name":"addApp","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"addAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"brandAccount","type":"address"},{"name":"brandName","type":"string"}],"name":"addBrand","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"products","outputs":[{"name":"productAccount","type":"address"},{"name":"brandAccount","type":"address"},{"name":"description","type":"string"},{"name":"details","type":"string"},{"name":"year","type":"uint256"},{"name":"origin","type":"string"},{"name":"active","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"appName","type":"string"},{"name":"feeAccount","type":"address"},{"name":"active","type":"bool"}],"name":"updateApp","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"productAccount","type":"address"},{"name":"itemHash","type":"bytes32"}],"name":"mark","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"item","type":"address"}],"name":"check","outputs":[{"name":"productAccount","type":"address"},{"name":"brandAccount","type":"address"},{"name":"appAccount","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"productAccount","type":"address"}],"name":"getProductData","outputs":[{"name":"brandAccount","type":"address"},{"name":"appAccount","type":"address"},{"name":"appFeeAccount","type":"address"},{"name":"active","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"productAccount","type":"address"}],"name":"getProduct","outputs":[{"components":[{"name":"productAccount","type":"address"},{"name":"brandAccount","type":"address"},{"name":"description","type":"string"},{"name":"details","type":"string"},{"name":"year","type":"uint256"},{"name":"origin","type":"string"},{"name":"active","type":"bool"}],"name":"product","type":"tuple"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"appAccount","type":"address"}],"name":"getApp","outputs":[{"components":[{"name":"appAccount","type":"address"},{"name":"appName","type":"string"},{"name":"feeAccount","type":"address"},{"name":"active","type":"bool"}],"name":"app","type":"tuple"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"brandAccountsLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"productAccount","type":"address"},{"name":"description","type":"string"},{"name":"details","type":"string"},{"name":"year","type":"uint256"},{"name":"origin","type":"string"}],"name":"addProduct","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"appAccount","type":"address"},{"indexed":false,"name":"appName","type":"string"},{"indexed":false,"name":"feeAccount","type":"address"},{"indexed":false,"name":"active","type":"bool"}],"name":"AppAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"appAccount","type":"address"},{"indexed":false,"name":"appName","type":"string"},{"indexed":false,"name":"feeAccount","type":"address"},{"indexed":false,"name":"active","type":"bool"}],"name":"AppUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"brandAccount","type":"address"},{"indexed":true,"name":"appAccount","type":"address"},{"indexed":false,"name":"brandName","type":"string"},{"indexed":false,"name":"active","type":"bool"}],"name":"BrandAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"brandAccount","type":"address"},{"indexed":true,"name":"appAccount","type":"address"},{"indexed":false,"name":"brandName","type":"string"},{"indexed":false,"name":"active","type":"bool"}],"name":"BrandUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"productAccount","type":"address"},{"indexed":true,"name":"brandAccount","type":"address"},{"indexed":true,"name":"appAccount","type":"address"},{"indexed":false,"name":"description","type":"string"},{"indexed":false,"name":"active","type":"bool"}],"name":"ProductAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"productAccount","type":"address"},{"indexed":true,"name":"brandAccount","type":"address"},{"indexed":true,"name":"appAccount","type":"address"},{"indexed":false,"name":"description","type":"string"},{"indexed":false,"name":"active","type":"bool"}],"name":"ProductUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"marker","type":"address"},{"indexed":true,"name":"brandAccount","type":"address"},{"indexed":false,"name":"permission","type":"bool"}],"name":"Permissioned","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"marker","type":"address"},{"indexed":true,"name":"productAccount","type":"address"},{"indexed":false,"name":"itemHash","type":"bytes32"}],"name":"Marked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"addr","type":"address"}],"name":"AdminAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"addr","type":"address"}],"name":"AdminRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"}]

    // let contract = this.web3.eth.contract(abiArray).at('0x654f4a3e3B7573D6b4bB7201AB70d718961765CD')
  }

  toHomeScreen = (address) => {
    this.props.navigation.dispatch(navigate({ routeName: 'MainDrawer', params: {token: address} }))
  }
  toQRScreen = () => this.props.navigation.dispatch(resetTo({ routeName: 'QRScreen' }))
  changeToken = (text) => this.setState({tokenInput: text})
  
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
              onChangeText={(text) => this.changeToken(text)}
              value={this.state.tokenInput} />
            <View style={{marginLeft: 30, marginRight: 30}}>
              <Button
                onPress={() => this.toHomeScreen(this.state.tokenInput)}
                color="#00d8aa"
                title="Verify"
              >
              </Button>
              <Text style={styles.footerText} >Enter 0xc72DEa9c19D6a056B57eaA0B70Bc5e8d2c7FF148 to demo the product check. This demo serves as a proof of concept is not connected to the blockchain.</Text>
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
    flex: 2,
    flexDirection: 'column',
    width: '100%',
    marginTop: 50
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
  }

});

export default LoginScreen
