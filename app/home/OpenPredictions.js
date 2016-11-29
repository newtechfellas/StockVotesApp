/**
 * Created by Kalpana and Suman on 11/29/16.
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';

export default class OpenPredictions extends Component {
    render() {
        return (
            <View style={styles.OpenPredictions}><Text>Open Predictions</Text></View>
        )
    }
}

const styles = StyleSheet.create({
    OpenPredictions: {
        flex: 1
    }
});
