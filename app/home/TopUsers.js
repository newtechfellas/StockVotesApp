/**
 * Created by Kalpana and Suman on 11/29/16.
 */
import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';

export default class TopUsers extends Component {
    render() {
        return (
            <View style={styles.TopUsers}><Text>Top Users</Text></View>
        )
    }
}

const styles = StyleSheet.create({
    TopUsers: {
        flex: 1
    }
});
