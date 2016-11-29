/**
 * Created by Kalpana and Suman on 11/29/16.
 */
import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';

export default class TrendingStocks extends Component {
    render() {
        return (
            <View style={styles.TrendingStocks}><Text>Trending Stocks</Text></View>
        )
    }
}

const styles = StyleSheet.create({
    TrendingStocks: {
        flex: 1
    }
});