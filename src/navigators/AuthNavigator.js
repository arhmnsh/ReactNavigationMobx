import {observer} from 'mobx-react';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from '../screens/AuthScreens/LoginScreen';
import SignupScreen from '../screens/AuthScreens/SignupScreen';

const AuthNavigator = createStackNavigator(
  {
    LoginScreen: LoginScreen,
    SignupScreen: SignupScreen,
  },
  {
    defaultNavigationOptions: {},
  },
);

export default observer(AuthNavigator);
