import {decorate, observable, action, toJS} from 'mobx';
import AsyncStorage from '@react-native-community/async-storage';

class AuthStore {
  userDetails = {};

  login(userDetails, callback) {
    AsyncStorage.setItem('userDetails', JSON.stringify(userDetails));

    this.userDetails = userDetails;
    callback(null, 'success');
  }

  logout(callback) {
    AsyncStorage.removeItem('userDetails');
    callback(null, 'success');
  }
}

decorate(AuthStore, {
  userDetails: observable,
});

export default new AuthStore();
