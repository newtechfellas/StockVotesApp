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
import {GetCurrentSceneKey, HOME_SCENE_KEY} from '../Scenes'

class HomeScene extends Component {
    constructor() {
        super();
        this.state = {};
        this.apiCalledTimestamp = undefined;
        this.apiCallIntervalHook = undefined;
        this.homeViewData = {};
    }

    componentWillUnmount() {
        if ( this.apiCallIntervalHook ) {
            clearInterval(this.apiCallIntervalHook);
        }
    }

    componentDidMount() {
       this.fetchDataAndUpdateState();
       this.apiCallIntervalHook = setInterval(() => {
                if (GetCurrentSceneKey() == HOME_SCENE_KEY) {
                    this.fetchDataAndUpdateState();
                } else {
                    util.LogDebug("data fetch ignored. Homeview is not active view");
                }
        }, 5 * 60 * 1000); //call API every 5 minutes
    }

    fetchDataAndUpdateState() {
        let component = this;
        this.apiCalledTimestamp = Date.now();
        console.log("Fetching data for Home View");
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
