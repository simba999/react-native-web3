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

import { resetTo } from '../navigators/navigationActions'

const deveryscreen = require("./../images/img/deveryscreen-svg.png");
const checkbox = require("./../images/img/checkbox.png"); 
const originImage = require("./../images/img/origin.png"); 
const rect = require("./../images/img/rect.png");

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


class LoginScreen extends React.Component {

  constructor() {
    super();

    this.state = {
      tokenInput: ''
    }
  }

  componentDidMount() {
    console.log(this.props)
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

export default LoginScreen
