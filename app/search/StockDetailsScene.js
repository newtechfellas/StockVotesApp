/**
 * Created by Kalpana and Suman on 12/1/16.
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ActivityIndicator, TouchableHighlight} from 'react-native';
import {Actions} from 'react-native-router-flux'
import commonStyles from '../CommonStyles'
import {LoadingView} from '../Common'
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
        if ( this.state.dataFetched != true) {
            return <LoadingView />
        } else {
            return (
                <View style={[commonStyles.container]}>
                    <Header symbol={this.stockViewData.symbol} name={this.stockViewData.name}/>
                </View>
            )
        }
    }
}

const Header = ({symbol, name}) => (
    <View style={styles.header}>
        <TouchableHighlight underlayColor='#efefef' onPress={Actions.pop}>
            <Image resizeMode="cover" style={styles.headerMenuIcon}
                   source={require('../../images/Bulleted-List-Filled-100.png')}/>
        </TouchableHighlight>
        <View style={{flex:1, alignItems : 'center'}}>
            <Text>{symbol}</Text>
            <Text style={styles.stockSymbolName}>{name}</Text>
        </View>
    </View>
);

export default StockDetailsScene

const styles = StyleSheet.create({
    header : {
        flex: 0.2,
        paddingTop: 30,
        // justifyContent: 'center',
        flexDirection: 'row',
        paddingLeft : 5,
        flex:1
    },
    headerMenuIcon: {
        height: 25,
        width: 25,
        paddingLeft: 15,
    },
    stockSymbolName : {
        fontSize : 10,
        color : 'grey'
    }
});