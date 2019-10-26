import {observer} from 'mobx-react';
import {createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import MainScreen from '../screens/MainScreens/';
import SecondScreen from '../screens/MainScreens/SecondScreen';

const MainNavigator = createDrawerNavigator({
  MainScreens: createStackNavigator(
    {
      MainScreen: MainScreen,
      SecondScreen: SecondScreen,
    },
    {
      defaultNavigationOptions: {},
    },
  ),

  OtherScreens: createStackNavigator(
    {
      MainScreen: MainScreen,
      SecondScreen: SecondScreen,
    },
    {
      defaultNavigationOptions: {},
    },
  ),
});

export default observer(MainNavigator);
