import { StackNavigator } from 'react-navigation'

import LoginScreen from '../screens/LoginScreen'

import { MainDrawer } from './MainDrawer'

const RootNavigator = StackNavigator({
  LoginScreen: { screen: LoginScreen },

  MainDrawer: { screen: MainDrawer },
}, {
  initialRouteName: 'LoginScreen',
  headerMode: 'none',
  mode: 'modal'
})

export { RootNavigator }
