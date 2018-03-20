import { DrawerNavigator } from 'react-navigation'

import HomeScreen from '../screens/HomeScreen'

import { Drawer, getDrawerLabel } from '../components/Drawer'

const MainDrawer = DrawerNavigator({
  HomeScreen: { screen: HomeScreen, navigationOptions: { drawerLabel: getDrawerLabel('Home', true) } }  
}, {
  initialRouteName: 'HomeScreen',
  contentComponent: Drawer,
})

export { MainDrawer }
