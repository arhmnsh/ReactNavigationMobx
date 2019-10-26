import React from 'react';
import {Button, SafeAreaView, View, Text} from 'react-native';
import {observer} from 'mobx-react';
import AsyncStorage from '@react-native-community/async-storage';
import AuthStore from '../../stores/AuthStore';

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    // title: I18n.t("Main")
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{alignItems: 'center'}}>
          <Text>Main Screen</Text>
          <Text>{JSON.stringify(AuthStore.userDetails)}</Text>
          <Button title="Go to second screen" onPress={() => this._onGoToSecondScreen()} />
        </View>
      </SafeAreaView>
    );
  }

  _onGoToSecondScreen() {
    this.props.navigation.navigate('SecondScreen')
  }
}

export default observer(MainScreen);
