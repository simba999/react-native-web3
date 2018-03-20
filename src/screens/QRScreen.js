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
} from 'react-native';

import Web3 from 'web3';
import { BarCodeScanner, Permissions } from 'expo';
import { resetTo, navigate } from '../navigators/navigationActions'

export default class QRScreen extends Component {
  state = {
    hasCameraPermission: null,
    lastScannedUrl: null,
  };

  constructor() {
    super()

    this.web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.etherscan.io'));
  }

  componentDidMount() {
    this._requestCameraPermission();
  }

  toHomeScreen = (address) => {
    if (this.web3.isAddress(address)) {
      this.props.navigation.dispatch(navigate({ routeName: 'MainDrawer', params: {token: address} }))  
    }
    
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = result => {
    if (result.data !== this.state.lastScannedUrl) {
      LayoutAnimation.spring();
      this.setState({ lastScannedUrl: result.data });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.hasCameraPermission === null
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
                />}

        {this._maybeRenderUrl()}

        <StatusBar hidden />
      </View>
    );
  }

  _handlePressUrl = () => {
    if (this.web3.isAddress(this.state.lastScannedUrl)) {
      Alert.alert(
        'Are you sure?',
        this.state.lastScannedUrl,
        [
          {
            text: 'Yes',
            onPress: () => this.toHomeScreen(this.state.lastScannedUrl)
          },
          { text: 'No', onPress: () => {} },
        ],
        { cancellable: false }
      );
    } else {
      let msg = 'Please, enter contract address'
      Alert.alert(
        'This Contract is invalid.',
        msg,
        [
          {
            text: 'Ok',
            onPress: () => {}
          }
        ],
        { cancellable: false }
      );
    }

  };

  _handlePressCancel = () => {
    this.setState({ lastScannedUrl: null });
  };

  _maybeRenderUrl = () => {
    if (!this.state.lastScannedUrl) {
      return;
    }

    return (
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.url} onPress={this._handlePressUrl}>
          <Text numberOfLines={1} style={styles.urlText}>
            {this.state.lastScannedUrl}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={this._handlePressCancel}>
          <Text style={styles.cancelButtonText}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
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
