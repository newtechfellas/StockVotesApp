/**
 * Created by yuyutsu on 11/24/16.
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';
import SearchBar from '../SearchBar'
import Header from './Header'

const HomeView = () => (
    <View style={styles.container}>
        <Header/>
        <SearchBar />
    </View>
);

export default HomeView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C9E0E8'
    }
});