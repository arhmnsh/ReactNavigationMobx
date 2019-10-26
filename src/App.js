import React, {Fragment} from 'react';
import {observer} from 'mobx-react';
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';

import AuthNavigator from './navigators/AuthNavigator';
import MainNavigator from './navigators/MainNavigator';

import LoadingScreen from './screens/LoadingScreen';

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      Auth: AuthNavigator,
      MainScreens: MainNavigator,
    },
    {
      initialRouteName: 'Loading',
    },
  ),
);

const App = () => <AppContainer />;

export default observer(App);
