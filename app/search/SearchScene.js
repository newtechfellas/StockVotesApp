/**
 * Created by yuyutsu on 11/23/16.
 */

import React, {Component} from 'react';
import {View, Image, TextInput, Text, StyleSheet, ScrollView, TouchableHighlight} from 'react-native';
import {Actions} from 'react-native-router-flux'
import util from '../Utils'
export default class SearchScene extends Component {
    constructor() {
        super();
        this.state = {text: ""}
    }

    componentDidMount() {
        //Fetch Stock Symbols from Cache or from Server
        this.stockSymbols = util.FetchStockSymbols()
    }

    // searches for stocks symbols that match the user entered input value
    filterSymbols(input) {
        let symbolRows = [];
        if (!input || input.match(/^\s*$/)) {
            return symbolRows;
        }
        if (this.stockSymbols && this.stockSymbols.length > 0) {
            symbolRows = this.stockSymbols.filter((stock) => stock.symbol.includes(input)).map((stock, i) =>
                <StockScrollItem key={i} stock={stock}/>)
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
                               autoFocus={true}
                               autoCapitalize={'characters'} autoCorrect={false} placeholder={'Search...'}
                               onChangeText={(text) => this.setState({text})}
                               value={this.state.text}
                    />
                    <TouchableHighlight onPress={Actions.pop} style={styles.cancel}>
                        <Text style={{color: 'green'}}>X</Text>
                    </TouchableHighlight>
                </View>
                <ScrollView keyboardDismissMode='on-drag'
                            keyboardShouldPersistTaps={true}
                            style={styles.searchResultsScroll}>
                    {symbolRows}
                </ScrollView>
            </View>
        )
    }
}


const StockScrollItem = ({stock, index}) => (
    <TouchableHighlight onPress={() => Actions.stockDetails({stock: stock})}>
        <View style={styles.scrollItem}>
            <Text style={styles.scrollItemStockSymbol}>{stock.symbol}</Text>
            <Text style={styles.scrollItemStockName}>{stock.name}</Text>
        </View>
    </TouchableHighlight>
);

const styles = StyleSheet.create({
    searchScreen: {
        flex: 1
    },
    searchBar: {
        flex: 0.1,
	height: 30,
        paddingTop: 30,
        flexDirection: 'row',
    },
    searchIcon: {
        flex: 0.1,
	marginTop: 10,
        resizeMode: 'contain',
        height: 25,
        width: 25,
        alignItems: 'flex-start'
    },
    searchInput: {
        flex: 1,
        paddingLeft: 5
    },
    cancel: {
	marginTop: 10,
        alignItems: 'flex-end',
        flex: 0.1,
        paddingRight: 10
    },
    searchResultsScroll: {
        flex: 0.9,
        padding: 10
    },
    scrollItem: {
        marginBottom: 15,
        paddingBottom: 15,
        borderBottomWidth: 0.5
    },
    scrollItemStockSymbol: {},
    scrollItemStockName: {
        fontSize: 10,
        color: 'grey'
    },


});
