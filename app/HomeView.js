/**
 * Created by yuyutsu on 11/24/16.
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';
import SearchBar from './SearchBar'

const HomeView = () => (
    <View style={styles.container}>
        <Header/>
        <SearchBar />
    </View>
);

const Header = () => (
    <View style={styles.header}>
        <Text style={styles.headerUserIcon}>User</Text>
        <SearchIcon/>
    </View>
);

class SearchIcon extends Component {
    launchSearch() {
        console.log("search launched");
    }

    render() {
        return (
            <View style={styles.headerSearchIcon}>
                <TouchableHighlight onPress={this.launchSearch.bind(this)}>
                    <Image source={require('../images/Search-20.png')}/>
                </TouchableHighlight>
            </View>
        )
    }
}


export default HomeView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C9E0E8'
    },
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