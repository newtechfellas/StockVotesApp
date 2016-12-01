/**
 * Created by yuyutsu on 11/23/16.
 */

import React, {Component} from 'react';
import {View, Image, TextInput, Text, StyleSheet, ScrollView, TouchableHighlight} from 'react-native';
import {Actions} from 'react-native-router-flux'
export default class SearchBar extends Component {
    constructor() {
        super();
        this.state = {text: ""}
    }

    componentDidMount() {
        //Fetch Stock Symbols from Cache or from Server
        this.stockSymbols = ['GPRO', 'GOOG', 'NFLX']
    }

    filterSymbols(input) {
        let symbolRows = [];
        if (!input || input.match(/^\s*$/)) {
            return symbolRows;
        }
        if (this.stockSymbols && this.stockSymbols.length > 0) {
            symbolRows = this.stockSymbols.filter((symbol) => symbol.includes(input)).map((symbol, i) => <Text
                key={i}>{symbol}</Text>)
        }
        return symbolRows;
    }

    render() {
        let symbolRows = this.filterSymbols(this.state.text);
        return (
            <View style={styles.searchScreen}>
                <View style={styles.searchBar}>
                    <Image style={styles.searchIcon} source={require('../../images/Search-Green-50.png')}></Image>
                    <TextInput style={styles.searchInput}
                               autoCapitalize={'characters'} autoCorrect={false} placeholder={'Search...'}
                               onChangeText={(text) => this.setState({text})}
                               value={this.state.text}
                    />
                    <TouchableHighlight onPress={Actions.pop} style={styles.cancel}>
                        <Text style={{color: 'green'}}>X</Text>
                    </TouchableHighlight>
                </View>

                <ScrollView style={{flex: 0.9}}>{symbolRows}</ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    searchScreen: {
        flex: 1
    },
    searchBar: {
        flex: 0.1,
        paddingTop: 30,
        flexDirection: 'row',
    },
    searchIcon: {
        flex: 0.1,
        resizeMode: 'contain',
        height: 20,
        width: 20,
        alignItems: 'flex-start'
    },
    searchInput: {
        flex: 1,
        height: 20,
        paddingLeft: 5
    },
    cancel: {
        alignItems: 'flex-end',
        flex: 0.1,
        paddingRight: 10

    }
});
