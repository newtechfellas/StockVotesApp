/**
 * Created by Kalpana and Suman on 12/1/16.
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Image, ActivityIndicator, TouchableHighlight} from 'react-native';
import {Actions} from 'react-native-router-flux'
import commonStyles from '../CommonStyles'
import {LoadingView, MyText, ErrorView} from '../Common'
import util from '../Utils'
import Slider from 'react-native-slider'

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
        switch (this.state.dataFetched) {
            case undefined:
                return <LoadingView />;
            case false:
                return <ErrorView/>;
            case true:
                return (
                    <View style={[commonStyles.container]}>
                        <Header symbol={this.stockViewData.symbol} name={this.stockViewData.name}/>
                        <CurrentStockPrice stockViewData={this.stockViewData}/>
                        <PredictionSlider stockViewData={this.stockViewData}/>
                    </View>
                )
        }
    }
}

class PredictionSlider extends Component {
    constructor(props) {
        super(props);


        const predictionTypeValueMap = new Map();
        predictionTypeValueMap.set(-3, '5L');
        predictionTypeValueMap.set(-2, '2L');
        predictionTypeValueMap.set(-1, 'L');
        predictionTypeValueMap.set(0, 'X');
        predictionTypeValueMap.set(1, 'G');
        predictionTypeValueMap.set(2, '2G');
        predictionTypeValueMap.set(3, '5G');
        this.predictionTypeValueMap = predictionTypeValueMap;
        //initial value of the slider to be updated from the data returned from server for current stock details
        this.state = {'sliderValueNumber': this.getPredictionValueForType(this.props.stockViewData.myPrediction)}
    }

    getPredictionValueForType(type) {
        let entries = this.predictionTypeValueMap.entries();
        let next = entries.next();
        while (next) {
            if (next.value[1] == type) {
                return next.value[0];
            }
            next = entries.next();
        }
        return undefined;
    }


    render() {
        let predictionType = this.predictionTypeValueMap.get(this.state.sliderValueNumber);
        let backgroundColor = util.backgroundColorForPredictionType(predictionType);
        let borderColor = backgroundColor;
        console.log("rendering for value = " + this.state.sliderValueNumber);
        return (
            <View style={[commonStyles.sliderContainer]}>
                <MyText style={styles.sliderTitle} data="Choose a prediction"></MyText>
                <Slider
                    value={this.state.sliderValueNumber}
                    step={1}
                    onSlidingComplete={(value) => this.setState({'sliderValueNumber' : value})}
                    minimumValue={-3}
                    maximumValue={3}
                    trackStyle={styles.track}
                    thumbStyle={styles.thumb}
                    minimumTrackTintColor='#1073ff'
                    maximumTrackTintColor='#b7b7b7'
                />
                <View style={[styles.predictionValueContainer, {backgroundColor} , {borderColor}]}>
                        <MyText style={styles.predictionValue} data={util.descriptionForPredictionType(predictionType)}/>
                </View>
            </View>
        )
    }
}

const CurrentStockPrice = ({stockViewData}) => {
    const changePercentageColor = stockViewData.changePrice > 0 ? '#21ce99' : '#f66323';
    const currentPriceParts = stockViewData.currentPrice.toString().split(".");
    return (
        <View style={styles.currentPriceView}>
            <View style={{flexDirection:'row'}}>
                <MyText style={[commonStyles.stockPriceFont,{fontSize: 30}]} data="$"/>
                <MyText style={[commonStyles.stockPriceFont, {fontSize: 40} ]} data={currentPriceParts[0]}/>
                <MyText style={[commonStyles.stockPriceFont,{fontSize: 30}]} data={"."+currentPriceParts[1]}/>
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
        // flex: 0.2,
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
        height: 120,
        paddingTop: 20,
    },
    changePercentage: {
        fontSize: 12,
    },
    sliderContainer: {
        // height: 60,
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#ededed',
        borderRadius: 4,
    },
    sliderTitle: {
        fontSize: 16,
        color: 'blue'
    },
    predictionValueContainer: {
        backgroundColor: '#85c559',
        width: 100,
        height: 30,

        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#85c559',
    },
    predictionValue: {
        textAlign: 'center',
        color: 'white',
        paddingTop: 5,
    },
    track: {
        height: 2,
        borderRadius: 1,
    },
    thumb: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 2,
        shadowOpacity: 0.35,
    }
});