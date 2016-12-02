/**
 * Created by yuyutsu on 11/24/16.
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';
import SearchBar from '../search/SearchScene'
import Header from './Header'
import TrendingStocks from './TrendingStocks'
import TopUsers from './TopUsers'
import OpenPredictions from './OpenPredictions'

const HomeScene = () => (
    <View style={styles.container}>
        <Header/>
        <OpenPredictions/>
        <TrendingStocks/>
        <TopUsers/>
    </View>
);

export default HomeScene

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});