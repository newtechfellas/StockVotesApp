/**
 * Created by yuyutsu on 11/24/16.
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';
import SearchBar from '../search/SearchScene'
import Header from './Header'
import TrendingStocks from './TrendingStocks'
import TopUsers from './TopUsers'
import OpenPredictions from './OpenPredictions'
import util from '../Utils'

class HomeScene extends Component {
    constructor() {
        super();
        this.state = {}
    }
    componentDidMount() {
        let component = this;
        let data = util.FetchHomeViewData()
            .then((responseJson) => {
                //persist the data in Cache
                component.setState({ "dataFetched" : true})
            })
            .catch((error) => {
                component.setState({ "dataFetched" : false, error : error})
            });
    }

    render() {
        let { dataFetched } = this.state;
        if ( dataFetched ) {
            return (
                <View style={styles.container}>
                    <Header/>
                    <OpenPredictions/>
                    <TrendingStocks/>
                    <TopUsers/>
                </View>
            )
        }
        if ( dataFetched == false) {
            return (
                <View>
                    <Text>Error in fetching data. Try relaunching the app. Error is {this.state.error}</Text>
                </View>
            )
        }
        if ( dataFetched == undefined) {
            return (
                <View><Text>Loading...</Text></View>
            )
        }
    }
}

export default HomeScene

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});