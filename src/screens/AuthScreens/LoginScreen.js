import React from 'react';
import {Button, SafeAreaView, View, Text} from 'react-native';
import {observer} from 'mobx-react';
import AsyncStorage from '@react-native-community/async-storage';
import AuthStore from '../../stores/AuthStore';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    // title: I18n.t("login")
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{alignItems: 'center'}}>
          <Text>Login Screen</Text>
          <Button title="Login" onPress={() => this._onLogin()} />
        </View>
      </SafeAreaView>
    );
  }

  _onLogin() {
    let userDetails = {
      username: 'myUserName',
      email: 'myEmail@google.com',
    };
    AuthStore.login(userDetails, (err, response) => {
      if (!err) {
        this.props.navigation.navigate('MainScreen');
      }
    });
  }
}

export default observer(LoginScreen);
