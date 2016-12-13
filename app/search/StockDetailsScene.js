/**
 * Created by Kalpana and Suman on 12/1/16.
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ActivityIndicator, TouchableHighlight} from 'react-native';
import {Actions} from 'react-native-router-flux'
import commonStyles from '../CommonStyles'
import {LoadingView, MyText} from '../Common'
import util from '../Utils'

class StockDetailsScene extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        //Update title after launch to reflect the current stock
        let {stock} = this.props;
        var component = this;
        util.FetchStockDetailsViewData(stock.symbol)
            .then((responseJson) => {
                //persist the data in Cache
                component.stockViewData = responseJson;
                component.setState({"dataFetched": true})
            })
            .catch((error) => {
                component.setState({"dataFetched": false, error: error})
            });
    }

    render() {
        let {stock} = this.props;
        if (this.state.dataFetched != true) {
            return <LoadingView />
        } else {
            return (
                <View style={[commonStyles.container]}>
                    <Header symbol={this.stockViewData.symbol} name={this.stockViewData.name}/>
                    <CurrentStockPrice stockViewData={this.stockViewData}/>
                </View>
            )
        }
    }
}

const CurrentStockPrice = ({stockViewData}) => {
    const changePercentageColor = stockViewData.changePrice > 0 ? '#21ce99' : '#f66323';
    const currentPriceParts = stockViewData.currentPrice.toString().split(".");
    return (
        <View style={styles.currentPriceView}>
            <View style={{flexDirection:'row', alignItems: 'flex-end'}}>
                <MyText style={{fontSize: 30}} data="$"/>
                <MyText style={styles.currentPriceValue} data={currentPriceParts[0]}/>
                <MyText style={{fontSize:30}} data={"."+currentPriceParts[1]}/>
            </View>
            <MyText style={[styles.changePercentage, {color: changePercentageColor}]}
                    data={`${stockViewData.changePrice} (${stockViewData.changePercentage}%)`}/>
        </View>
    )
};

const Header = ({symbol, name}) => (

    <View style={styles.header}>
        <TouchableHighlight underlayColor='#efefef' onPress={Actions.pop}>
            <Image resizeMode="cover" style={styles.headerMenuIcon}
                   source={require('../../images/Bulleted-List-Filled-100.png')}/>
        </TouchableHighlight>
        <View style={{flex:1, alignItems : 'center'}}>
            <MyText style={{fontSize:15}} data={symbol}/>
            <MyText style={styles.stockSymbolName} data={name}/>
        </View>
    </View>
);

export default StockDetailsScene

const styles = StyleSheet.create({
    header: {
        flex: 0.2,
        paddingTop: 30,
        // justifyContent: 'center',
        flexDirection: 'row',
        paddingLeft: 5,
        // flex: 1
    },
    headerMenuIcon: {
        height: 25,
        width: 25,
        paddingLeft: 15,
    },
    stockSymbolName: {
        fontSize: 10,
        color: 'grey'
    },
    currentPriceView: {
        alignItems: 'center',
        flex: 1
    },
    currentPriceValue: {
        fontSize: 40,

    },
    changePercentage: {
        fontSize: 12,
    }
});