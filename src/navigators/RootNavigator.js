import { StackNavigator } from 'react-navigation'

import LoginScreen from '../screens/LoginScreen'
import QRScreen from '../screens/QRScreen'

import { MainDrawer } from './MainDrawer'

const RootNavigator = StackNavigator({
  LoginScreen: { screen: LoginScreen },
  QRScreen: { screen: QRScreen },
  MainDrawer: { screen: MainDrawer },
}, {
  initialRouteName: 'LoginScreen',
  headerMode: 'none',
  mode: 'modal'
})

export { RootNavigator }
