import React from 'react';
import {Button, SafeAreaView, View, Text} from 'react-native';
import {observer} from 'mobx-react';


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
      <SafeAreaView style={{ flex: 1 }}>
       <Text>Login Screen</Text>
       <Button title="test">test</Button>
      </SafeAreaView>
    );
  }
}

export default observer(LoginScreen);