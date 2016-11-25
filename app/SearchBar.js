/**
 * Created by yuyutsu on 11/23/16.
 */

import React, {Component} from 'react';
import {View, Image, TextInput, Text, StyleSheet, ScrollView} from 'react-native';
export default class SearchBar extends Component {
    constructor() {
        super();
        this.state = {text: ""}
    }

    componentDidMount() {
        //Fetch Stock Symbols from Cache or from Server
        this.stockSymbols = [ 'GPRO', 'GOOG', 'NFLX' ]
    }

    filterSymbols(input) {
        let data = []
        if ( !input || input.match(/^\s*$/) ) {
            return data
        }
        if ( this.stockSymbols && this.stockSymbols.length > 0 ) {
            data = this.stockSymbols.filter((symbol) =>  {
                return symbol.includes(input)
            })
        }
        return data
    }

    render() {
        let symbolsForInput = this.filterSymbols(this.state.text)
        let symbolRows = []
        for (var i = 0; i < symbolsForInput.length; i++) {
            symbolRows.push(<Text key={i}>{symbolsForInput[i]}</Text>)
        }
        return (
            <View>
            <View style={styles.searchBar}>
                <Image style={styles.searchIcon} source={require('../images/Search-20.png')}></Image>
                <TextInput style={styles.searchInput}
                           autoCapitalize={'characters'} autoCorrect={false} placeholder={'Search'}
                           onChangeText={(text) => this.setState({text})}
                           value={this.state.text} clearButtonMode="always"
                />
            </View>
            <ScrollView>{symbolRows}</ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    searchBar: {
        marginTop: 40,
        marginBottom: 10,
        height: 20,
        flexDirection: 'row',
    },
    searchIcon: {
        flex: 0.1,
        resizeMode: 'contain'
    },
    searchInput: {
        flex: 1,
    }
});
