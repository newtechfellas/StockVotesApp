/**
 * Created by Kalpana and Suman on 12/1/16.
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';
import {Actions} from 'react-native-router-flux'

const StockDetailsScene = ({stock}) => (
    <View>
        <TouchableHighlight onPress={Actions.pop} style={styles.cancel}>
            <Text style={{color: 'green'}}>X</Text>
        </TouchableHighlight>
        <Text>{stock.symbol}</Text>
    </View>
);

export default StockDetailsScene

const styles = StyleSheet.create({
    cancel: {
        alignItems: 'flex-start',
        flex: 0.1,
        paddingLeft: 10
    },
});