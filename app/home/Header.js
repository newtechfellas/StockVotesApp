/**
 * Created by Kalpana and Suman on 11/29/16.
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';

const Header = () => (
    <View style={styles.header}>
        <UserIcon/>
        <SearchIcon/>
    </View>
);

export default Header
class SearchIcon extends Component {
    launchSearch() {
        console.log("search launched");
    }

    render() {
        return (
            <View style={styles.headerSearchIcon}>
                <TouchableHighlight onPress={this.launchSearch.bind(this)}>
                    <Image source={require('../../images/Search-20.png')}/>
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
                <TouchableHighlight onPress={this.launchUserProfile.bind(this)}>
                    <Image source={require('../../images/User-20.png')}/>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        paddingTop: 30,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    headerUserIcon: {
        paddingLeft: 10
    },
    headerSearchIcon: {
        paddingRight: 10
    }

});
