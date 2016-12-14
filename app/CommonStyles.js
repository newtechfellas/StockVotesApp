/**
 * Created by Kalpana and Suman on 12/3/16.
 */

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

var commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#eef7f8',
        padding: 5
    },
    text : {
        fontFamily : 'verdana',
        fontSize: 12
    },

    stockPriceFont : {
        fontFamily: 'American Typewriter',
        fontWeight: '100'
    },
    loadingIndicator : {
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    }
});

export default commonStyles