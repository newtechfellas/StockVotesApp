/**
 * Created by yuyutsu on 11/24/16.
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';
import SearchBar from '../search/SearchBar'
import Header from './Header'
import TrendingStocks from './TrendingStocks'
import TopUsers from './TopUsers'
import OpenPredictions from './OpenPredictions'

const HomeView = () => (
    <View style={styles.container}>
        <Header/>
        <OpenPredictions/>
        <TrendingStocks/>
        <TopUsers/>
    </View>
);

export default HomeView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});