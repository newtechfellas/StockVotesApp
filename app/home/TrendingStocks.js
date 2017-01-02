/**
 * Created by Kalpana and Suman on 11/29/16.
 */
import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, Text, Image, TouchableHighlight} from 'react-native';
import {MyText} from '../Common'
import {PushScene, STOCK_DETAILS_SCENE_KEY} from '../Scenes'

export default class TrendingStocks extends Component {
    render() {
        let {trending} = this.props;
        let trendingRows = trending.map((stock, i) => <TrendingItem key={i} stock={stock}/>);
        return (
            <View style={styles.TrendingStocks}>
                <Text style={styles.stockTitle}>Trending Stocks</Text>
                <ScrollView keyboardDismissMode='on-drag'
                            keyboardShouldPersistTaps={true}
                >
                    {trendingRows}
                </ScrollView>
            </View>
        )
    }
}

const TrendingItem = ({stock}) => (
    <TouchableHighlight underlayColor='#efefef' onPress={() => PushScene(STOCK_DETAILS_SCENE_KEY, {stock: stock})}>
        <View style={styles.trendingStockItem}>
            <MyText style={styles.stockSymbol} data={stock.symbol} />
            <View style={styles.trendingValueContainer}>
                <MyText style={styles.trendingValue} data={stock.predictions}/>
                <Image  resizeMode='cover' style={styles.userGroupIcon} source={require('../../images/User-Groups-100.png')}></Image>
            </View>
        </View>
    </TouchableHighlight>
);

const styles = StyleSheet.create({
    TrendingStocks: {
        flex: 1
    },
    stockTitle: {
        fontSize: 12,
        color: 'blue',
        marginBottom: 10
    },
    trendingValueContainer: {
        // backgroundColor: '#85c559',
        width: 100,
        height: 30,
        flexDirection : 'row',
        justifyContent: 'center',
        // borderRadius: 4,
        // borderWidth: 1,
        // borderColor: '#85c559'
    },
    trendingValue: {
        textAlign: 'center',
        // color: 'white',
        paddingTop: 5,
        paddingRight: 10,
    },
    stockSymbol: {
        paddingTop: 7,
        height: 30,
    },
    trendingStockItem: {
        height: 35,
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 5,
        paddingTop: 0,
        paddingBottom: 15,
        borderBottomWidth: 0.5,
        borderColor: 'green',
        marginBottom: 15
    },
    userGroupIcon : {
        width: 20,
        height: 20,
    }
});

