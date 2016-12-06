/**
 * Created by Kalpana and Suman on 11/29/16.
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';
import {Actions} from 'react-native-router-flux'

const Header = () => (
    <View style={styles.header}>
        <UserIcon/>
        <SearchIcon/>
    </View>
);

export default Header

class SearchIcon extends Component {

    render() {
        return (
            <View style={styles.headerSearchIcon}>
                <TouchableHighlight onPress={Actions.search}>
                    <Image style={styles.headerIconImage} source={require('../../images/Search-Green-50.png')}/>
                </TouchableHighlight>
            </View>
        )
    }
}

class UserIcon extends Component {
    launchUserProfile() {
        console.log("user profile launched");
    }

    render() {
        return (
            <View style={styles.headerUserIcon}>
                <TouchableHighlight onPress={() => Actions.refresh({key: 'drawer', open: value => !value })}>
                    <Image style={styles.headerIconImage} source={require('../../images/User-Green-50.png')}/>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 0.2,
        paddingTop: 30,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    headerIconImage : {
        height : 25,
        width : 25
    },
    headerUserIcon: {
        paddingLeft: 5
    },
    headerSearchIcon: {
        paddingRight: 5
    }

});
