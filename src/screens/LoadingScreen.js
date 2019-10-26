import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userDetailsString = await AsyncStorage.getItem('userDetails');
    let userDetails = JSON.parse(userDetailsString);
    if (userDetails) {
      this.props.navigation.navigate('MainScreens');
    } else {
      this.props.navigation.navigate('Auth');
    }
  };

  render() {
    return (
      <SafeAreaView>
        <Text> LoadingScreen </Text>
      </SafeAreaView>
    );
  }
}
