import React, { Component } from 'react';
import {
  Alert,
  Linking,
  Dimensions,
  LayoutAnimation,
  Text,
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Button,
  Platform
} from 'react-native';

import Web3 from 'web3';
import { BarCodeScanner, Permissions } from 'expo';
import { resetTo, navigate } from '../navigators/navigationActions'

export default class QRScreen extends Component {
  state = {
    hasCameraPermission: null,
    lastScannedUrl: null
  };

  constructor() {
    super()

    this.web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.etherscan.io'));
  }

  componentDidMount() {
    this._requestCameraPermission();
  }

  // route navigate to Home page
  toHomeScreen = (address) => {
    if (this.web3.isAddress(address)) {
      this.props.navigation.dispatch(navigate({ 
        routeName: 'MainDrawer', 
        params: {
          token: address
        } 
      }))  
    }
  }

  // give "Granted" permisson to camera
  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  // read code from QR scanner
  _handleBarCodeRead = result => {
    if (result.data !== this.state.lastScannedUrl) {
      LayoutAnimation.spring();

      this.setState({ lastScannedUrl: result.data });
      if (this.web3.isAddress(result.data)) {
        console.log('success', result.data)
        let msg = result.data; 
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
        // this.toHomeScreen(result.data)  
      } else {
        console.log('faile', result.data)
        let msg = result.data; 
        Alert.alert(
          'This Error is invalid.',
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
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        {
          this.state.hasCameraPermission === null
            ? <Text>Requesting for camera permission</Text>
            : this.state.hasCameraPermission === false
                ? <Text style={{ color: '#fff' }}>
                    Camera permission is not granted
                  </Text>
                : <BarCodeScanner
                    onBarCodeRead={this._handleBarCodeRead}
                    style={{
                      height: Dimensions.get('window').height,
                      width: Dimensions.get('window').width,
                    }}
                  />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 15,
    flexDirection: 'row',
  },
  url: {
    flex: 1,
  },
  urlText: {
    color: '#fff',
    fontSize: 20,
  },
  cancelButton: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 18,
  },
  centerBtn: {
    alignItems: 'center'
  }
});
