/**
 * Created by yuyutsu on 11/23/16.
 */

import React, { Component } from 'react';
import { View , Image, TextInput , StyleSheet, Platform} from 'react-native';
export default class SearchBar extends Component {
    constructor() {
        super();
        this.state = {text: ""}
    }
    render() {

        return (
            <View style={styles.searchBar}>
                    <Image style={styles.searchIcon} source={require('../images/Search-20.png')}></Image>
                    <TextInput  style={styles.searchInput} autoCapitalize={'characters'} placeholder={'Search'} placeholderTextColor={'blue'} onChangeText={(text) => this.setState({text})}
                               value={this.state.text} clearButtonMode="always"
                    />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    searchBar: {
        marginTop: (Platform.OS === 'android' ? 0 : 40),
        marginBottom : 10,
        height : 20,
        flexDirection: 'row',
    },
    searchIcon : {
        flex: 0.1,
        resizeMode:'contain'
    },
    searchInput : {
        flex : 1,
    }
});
