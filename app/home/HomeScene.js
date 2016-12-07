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
import commonStyles from '../CommonStyles'

class HomeScene extends Component {
    constructor() {
        super();
        this.state = {}
        this.homeViewData = {};
    }
    componentDidMount() {
        let component = this;
        let data = util.FetchHomeViewData()
            .then((responseJson) => {
                //persist the data in Cache
                component.homeViewData = responseJson;
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
                <View style={commonStyles.container}>
                    <Header/>
                    <OpenPredictions predictions={this.homeViewData.userSummary.openPredictions}/>
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