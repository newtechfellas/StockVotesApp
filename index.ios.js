/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
} from 'react-native';
import HomeView from './app/home/HomeView'

export default class StockVotesApp extends Component {
    render() {
        return (
            <HomeView/>
        );
    }
}

AppRegistry.registerComponent('StockVotesApp', () => StockVotesApp);
