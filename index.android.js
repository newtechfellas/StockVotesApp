/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Router} from 'react-native-router-flux';
import scenes from './app/Scenes'

export default class StockVotesApp extends Component {
  render() {
    return (
        <Router scenes={scenes}/>
    );
  }
}

AppRegistry.registerComponent('StockVotesApp', () => StockVotesApp);
