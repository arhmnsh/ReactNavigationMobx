import React from 'react';
import {Button, SafeAreaView, View, Text} from 'react-native';
import {observer} from 'mobx-react';
import AsyncStorage from '@react-native-community/async-storage';
import AuthStore from '../../stores/AuthStore';

class SecondScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    // title: I18n.t("Second")
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Text>Second Screen</Text>
        <Button title="Logout" onPress={() => this._onLogout()} />
      </SafeAreaView>
    );
  }

  _onLogout() {
    AuthStore.logout((err, response) => {
      if (!err) {
        this.props.navigation.navigate('Loading');
      }
    });
  }
}

export default observer(SecondScreen);
