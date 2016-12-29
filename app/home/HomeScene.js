/**
 * Created by yuyutsu on 11/24/16.
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';
import Header from './Header'
import TrendingStocks from './TrendingStocks'
import OpenPredictions from './OpenPredictions'
import util from '../Utils'
import commonStyles from '../CommonStyles'

class HomeScene extends Component {
    constructor() {
        super();
        this.state = {};
        this.homeViewData = {};
    }

    componentDidMount() {
        let component = this;
        let data = util.FetchHomeViewData()
            .then((responseJson) => {
                //persist the data in Cache
                component.homeViewData = responseJson;
                component.setState({"dataFetched": true})
            })
            .catch((error) => {
                component.setState({"dataFetched": false, error: error})
            });
    }

    render() {
        let {dataFetched} = this.state;
        if (dataFetched) {
            return (
                <View style={commonStyles.container}>
                    <Header/>
                    <OpenPredictions predictions={this.homeViewData.userSummary.openPredictions}/>
                    <TrendingStocks trending={this.homeViewData.trendingStocks}/>
                </View>
            )
        }
        if (dataFetched == false) {
            return (
                <View>
                    <Text>Error in fetching data. Try relaunching the app. Error is {this.state.error}</Text>
                </View>
            )
        }
        if (dataFetched == undefined) {
            return (
                <View style={styles.launchView}>
                    <Image style={{resizeMode:'contain'}}
                           source={require('../../images/Bull-96.png')}></Image>
                    <Text>X</Text>
                    <Image style={{resizeMode:'contain'}}
                           source={require('../../images/Bear-96.png')}></Image>
                </View>
            )
        }
    }
}
const styles = StyleSheet.create({
    launchView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }

});

export default HomeScene
