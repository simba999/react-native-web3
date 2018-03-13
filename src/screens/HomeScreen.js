import React from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  AppRegistry,
  Text,
  Button,
  Image,
  TextInput,
  Platform
} from 'react-native'

import Web3 from 'web3'
import { resetTo } from '../navigators/navigationActions'

const deveryscreen = require("./../images/img/deveryscreen-svg.png");
const checkbox = require("./../images/img/checkbox.png"); 
const originImage = require("./../images/img/origin.png"); 
const rect = require("./../images/img/rect.png");


class LoginScreen extends React.Component {

  constructor() {
    super();

    this.state = {
      tokenInput: ''
    }

    this.web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.etherscan.io'));
  }

  componentDidMount() {
    let contractAddress = '';
    if (this.props.navigation.state.params) {
      contractAddress = this.props.navigation.state.params.token;
    }

    let abiArray = [{"constant":true,"inputs":[{"name":"item","type":"address"}],"name":"addressHash","outputs":[{"name":"hash","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"brandAccounts","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"productAccount","type":"address"},{"name":"description","type":"string"},{"name":"details","type":"string"},{"name":"year","type":"uint256"},{"name":"origin","type":"string"},{"name":"active","type":"bool"}],"name":"updateProduct","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"productAccountsLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"marker","type":"address"},{"name":"permission","type":"bool"}],"name":"permissionMarker","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"apps","outputs":[{"name":"appAccount","type":"address"},{"name":"appName","type":"string"},{"name":"feeAccount","type":"address"},{"name":"active","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"removeAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"isAdmin","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"productAccounts","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"brandAccount","type":"address"}],"name":"getBrandData","outputs":[{"name":"appAccount","type":"address"},{"name":"appFeeAccount","type":"address"},{"name":"active","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"brandAccount","type":"address"}],"name":"getBrand","outputs":[{"components":[{"name":"brandAccount","type":"address"},{"name":"appAccount","type":"address"},{"name":"brandName","type":"string"},{"name":"active","type":"bool"}],"name":"brand","type":"tuple"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"admins","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"appAccountsLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"brandAccount","type":"address"},{"name":"brandName","type":"string"},{"name":"active","type":"bool"}],"name":"updateBrand","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"appAccounts","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"brands","outputs":[{"name":"brandAccount","type":"address"},{"name":"appAccount","type":"address"},{"name":"brandName","type":"string"},{"name":"active","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"appAccount","type":"address"}],"name":"getAppData","outputs":[{"name":"feeAccount","type":"address"},{"name":"active","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"appName","type":"string"},{"name":"feeAccount","type":"address"}],"name":"addApp","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"addAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"brandAccount","type":"address"},{"name":"brandName","type":"string"}],"name":"addBrand","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"products","outputs":[{"name":"productAccount","type":"address"},{"name":"brandAccount","type":"address"},{"name":"description","type":"string"},{"name":"details","type":"string"},{"name":"year","type":"uint256"},{"name":"origin","type":"string"},{"name":"active","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"appName","type":"string"},{"name":"feeAccount","type":"address"},{"name":"active","type":"bool"}],"name":"updateApp","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"productAccount","type":"address"},{"name":"itemHash","type":"bytes32"}],"name":"mark","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"item","type":"address"}],"name":"check","outputs":[{"name":"productAccount","type":"address"},{"name":"brandAccount","type":"address"},{"name":"appAccount","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"productAccount","type":"address"}],"name":"getProductData","outputs":[{"name":"brandAccount","type":"address"},{"name":"appAccount","type":"address"},{"name":"appFeeAccount","type":"address"},{"name":"active","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"productAccount","type":"address"}],"name":"getProduct","outputs":[{"components":[{"name":"productAccount","type":"address"},{"name":"brandAccount","type":"address"},{"name":"description","type":"string"},{"name":"details","type":"string"},{"name":"year","type":"uint256"},{"name":"origin","type":"string"},{"name":"active","type":"bool"}],"name":"product","type":"tuple"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"appAccount","type":"address"}],"name":"getApp","outputs":[{"components":[{"name":"appAccount","type":"address"},{"name":"appName","type":"string"},{"name":"feeAccount","type":"address"},{"name":"active","type":"bool"}],"name":"app","type":"tuple"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"brandAccountsLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"productAccount","type":"address"},{"name":"description","type":"string"},{"name":"details","type":"string"},{"name":"year","type":"uint256"},{"name":"origin","type":"string"}],"name":"addProduct","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"appAccount","type":"address"},{"indexed":false,"name":"appName","type":"string"},{"indexed":false,"name":"feeAccount","type":"address"},{"indexed":false,"name":"active","type":"bool"}],"name":"AppAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"appAccount","type":"address"},{"indexed":false,"name":"appName","type":"string"},{"indexed":false,"name":"feeAccount","type":"address"},{"indexed":false,"name":"active","type":"bool"}],"name":"AppUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"brandAccount","type":"address"},{"indexed":true,"name":"appAccount","type":"address"},{"indexed":false,"name":"brandName","type":"string"},{"indexed":false,"name":"active","type":"bool"}],"name":"BrandAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"brandAccount","type":"address"},{"indexed":true,"name":"appAccount","type":"address"},{"indexed":false,"name":"brandName","type":"string"},{"indexed":false,"name":"active","type":"bool"}],"name":"BrandUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"productAccount","type":"address"},{"indexed":true,"name":"brandAccount","type":"address"},{"indexed":true,"name":"appAccount","type":"address"},{"indexed":false,"name":"description","type":"string"},{"indexed":false,"name":"active","type":"bool"}],"name":"ProductAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"productAccount","type":"address"},{"indexed":true,"name":"brandAccount","type":"address"},{"indexed":true,"name":"appAccount","type":"address"},{"indexed":false,"name":"description","type":"string"},{"indexed":false,"name":"active","type":"bool"}],"name":"ProductUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"marker","type":"address"},{"indexed":true,"name":"brandAccount","type":"address"},{"indexed":false,"name":"permission","type":"bool"}],"name":"Permissioned","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"marker","type":"address"},{"indexed":true,"name":"productAccount","type":"address"},{"indexed":false,"name":"itemHash","type":"bytes32"}],"name":"Marked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"addr","type":"address"}],"name":"AdminAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"addr","type":"address"}],"name":"AdminRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"}]
    let contract = this.web3.eth.contract(abiArray).at(contractAddress)
    contract.getProductData(contractAddress, (err, res) => {
      console.log('r*****: ', err, '!!!!=\n', res)
    })
  }

  toLoginScreen = () => this.props.navigation.dispatch(resetTo({ routeName: 'LoginScreen' }))
  
  render () {
    return (
      <View style={styles.imageContainer}>
        <View style={styles.logoContainer}>
          <ImageBackground source={deveryscreen} style={styles.logo} />
        </View>
        <View style={styles.box}>
          <View style={styles.item}>
            <Text style={styles.mText}>This item is:</Text>
            <View style={styles.flexImage}>
              <Image
                style={styles.image}
                source={checkbox} />
              <Text h3 style={styles.lText}>
                Unknown
              </Text>
            </View>
          </View>
          <View style={styles.item}>
            <Text style={styles.mText}>Origin</Text>
            <View style={styles.flexImage}>
              <Image
                style={styles.imageOrigin}
                source={originImage} />
              <Text style={styles.xlText}>
                Unknown
              </Text>
            </View>
          </View>
          <View style={styles.item2}>
            <Text style={styles.sText}>Tracker</Text>
              <Image
                  style={styles.imageCenter}
                  source={rect} />
            <Text style={styles.sText}>No Tracker Information</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={{marginLeft: 20, marginRight: 20}}>
            <Button
              block
              color="#00d8aa"
              onPress={() => this.toLoginScreen()}
              title="Verify"
            >
            </Button>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f6f8fc'
  },
  logoContainer: {
    flex: 1,
    marginTop: 0,
    marginBottom: 10
  },
  logo: {
    left: Platform.OS === "android" ? 75 : 50,
    right: Platform.OS === "android" ? 40 : 50,
    top: Platform.OS === "android" ? 35 : 30,
    opacity: 0.3,
    width: 200,
    height: 50
  },
  text: {
    color: "#D8D8D8",
    bottom: 6,
    marginTop: 5
  },
  box: {
    borderWidth: 1,
    borderColor: '#ffffff',
    flex: 4,
    backgroundColor: '#ffffff',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    borderRadius: 6,
    shadowColor: '#1b29790d',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  sendTokenBtn: {
    backgroundColor: "#00d8aa",
    marginLeft: 20,
    marginRight: 20
  },
  footer: {
    width:  '100%'
  },
  item: {
    flex: 1,
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderBottomColor: '#e5eaf6'
  },
  item2: {
    flex: 2,
    flexDirection: 'column'
  },
  item__each: {
    justifyContent: 'center'
  },
  Text: {
    color: '#1b2979',
    alignSelf: 'center'
  },
  mText: {
    fontSize: 18,
    color: '#1b2979',
    alignSelf: 'center',
    paddingTop: 5
  },
  sText: {
    fontSize: 12,
    color: '#1b2979',
    alignSelf: 'center',
    flex: 1,
    paddingTop: 15
  },
  lText: {
    fontSize: 40,
    color: '#00d8aa',
    alignSelf: 'center',
    paddingTop: 15,
    marginBottom: 15,
    marginLeft: 10
  },
  xlText: {
    fontSize: 24,
    color: '#1b2979',
    alignSelf: 'center',
    paddingTop: 15,
    marginLeft: 10
  },
  image: {
    width: 20,
    height: 20
  },
  imageOrigin: {
    width: 20,
    height: 20,
    top: 10
  },
  imageCenter: {
    width: 70, 
    height:70,
    opacity: 0.6,
    alignSelf: 'center',
  },
  flexImage: {
    flexDirection:'row', 
    flexWrap:'wrap',
    justifyContent: 'center', 
    alignItems: 'center'
  }
});

export default LoginScreen
