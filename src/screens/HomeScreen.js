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

    this.web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/cT0u03IW2CjAND3KNXPs'));
  }

  componentDidMount() {
    let contractAddress = '';

    if (this.props.navigation.state.params) {
      contractAddress = this.props.navigation.state.params.token;
    }
    
    // my code
    let abiArray = [{"constant":false,"inputs":[{"name":"_new","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_who","type":"address"}],"name":"certify","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_who","type":"address"}],"name":"getCertifier","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"string"}],"name":"getAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_old","type":"address"}],"name":"removeDelegate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_who","type":"address"}],"name":"revoke","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"string"}],"name":"getUint","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_who","type":"address"}],"name":"certified","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_new","type":"address"}],"name":"addDelegate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"string"}],"name":"get","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"who","type":"address"},{"indexed":true,"name":"by","type":"address"}],"name":"Confirmed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"who","type":"address"},{"indexed":true,"name":"by","type":"address"}],"name":"Revoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"old","type":"address"},{"indexed":true,"name":"current","type":"address"}],"name":"NewOwner","type":"event"}];
    let contract = this.web3.eth.contract(abiArray);
    contract.check(contractAddress, (err, res) => {
      console.log('r*****: ', err, '!!!!=\n', res)
    })

    // your code
    // const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/cT0u03IW2CjAND3KNXPs"));
    // const abi = [{"constant":false,"inputs":[{"name":"_new","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_who","type":"address"}],"name":"certify","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_who","type":"address"}],"name":"getCertifier","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"string"}],"name":"getAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_old","type":"address"}],"name":"removeDelegate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_who","type":"address"}],"name":"revoke","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"string"}],"name":"getUint","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_who","type":"address"}],"name":"certified","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_new","type":"address"}],"name":"addDelegate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"string"}],"name":"get","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"who","type":"address"},{"indexed":true,"name":"by","type":"address"}],"name":"Confirmed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"who","type":"address"},{"indexed":true,"name":"by","type":"address"}],"name":"Revoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"old","type":"address"},{"indexed":true,"name":"current","type":"address"}],"name":"NewOwner","type":"event"}];
    // var myContract = new web3.eth.Contract(abi, contractAddress, {
    //   from: '0x1234567890123456789012345678901234567891', // default from address
    //   gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
    // });
    
    // myContract.methods.certified(key).call({from: '0x1234567890123456789012345678901234567891'}, function(error, result){
    //   console.log('err: ', error, ' :result: ', result)
    // })

  }  

  // route navigate to Login page
  toLoginScreen = () => this.props.navigation.dispatch(resetTo({ routeName: 'LoginScreen' }))

  render () {
    return (
      <View style={styles.imageContainer}>
        <View style={styles.logoContainer}>
          <Image source={deveryscreen} style={styles.logo} />
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
    position: "absolute",
    left: Platform.OS === "android" ? 100 : 90,
    top: Platform.OS === "android" ? 45 : 40,
    width: 150,
    height: 40,
    opacity: 0.3
  },
  text: {
    color: "#D8D8D8",
    bottom: 6,
    marginTop: 5
  },
  box: {
    borderWidth: 1,
    borderColor: '#ffffff',
    flex: 3,
    backgroundColor: '#ffffff',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    marginTop: -50,
    borderRadius: 10,
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
    width:  '100%',
    marginBottom: 20
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
