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
    },
    errorViewContainer : {
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    },
    submitButton : {
        backgroundColor: '#85c559',
        height: 40,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#85c559',
    },

    submitButtonLabel : {
        textAlign: 'center',
        color: 'white',
        paddingTop: 5,
        fontSize: 16
    }
});

export default commonStyles