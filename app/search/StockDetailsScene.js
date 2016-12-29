/**
 * Created by Kalpana and Suman on 12/1/16.
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Image, Picker, ActivityIndicator,ScrollView, TouchableHighlight} from 'react-native';
import {Actions} from 'react-native-router-flux'
import commonStyles from '../CommonStyles'
import {LoadingView, MyText, ErrorView} from '../Common'
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
        switch (this.state.dataFetched) {
            case undefined:
                return <LoadingView />;
            case false:
                return <ErrorView/>;
            case true:
                return (
                    <ScrollView style={[commonStyles.container]}>
                        <Header symbol={this.stockViewData.symbol} name={this.stockViewData.name}/>
                        <CurrentStockPrice stockViewData={this.stockViewData}/>
                        <PredictionPicker stockViewData={this.stockViewData} />
                    </ScrollView>
                )
        }
    }
}

class PredictionPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {'value' : this.props.stockViewData.myPrediction};
    }

    render() {
        let disableUpdateButton = this.props.stockViewData.myPrediction === this.state.value;
        let updateButtonLabel = disableUpdateButton ? "Current Prediction" : "Update Prediction";
        let updateButtonbackgroundColor = disableUpdateButton ? "grey" : "#85c559";
        return (
            <View style={[styles.pickerContainer]}>
                <MyText style={styles.pickerTitle} data="My prediction"></MyText>
                <Picker
                    selectedValue={this.state.value}
                    onValueChange={(item) => this.setState({'value' : item})}
                >
                    <Picker.Item label="5% Bearish" value="5L"/>
                    <Picker.Item label="2% Bearish" value="2L"/>
                    <Picker.Item label="Bearish" value="L" />
                    <Picker.Item label="-Select-" value="X"/>
                    <Picker.Item label="Bullish" value="G"/>
                    <Picker.Item label="2% Bullish" value="2G"/>
                    <Picker.Item label="5% Bullish" value="5G"/>
                </Picker>
                <TouchableHighlight style={[commonStyles.submitButton, {backgroundColor : updateButtonbackgroundColor, borderColor : updateButtonbackgroundColor}]}
                                    disabled={disableUpdateButton}
                                    underlayColor='#efefef'
                                    onPress={() => console.log("Prediction updated "+this.state.value)}>
                    <View>
                        <MyText style={commonStyles.submitButtonLabel} data={updateButtonLabel} />
                    </View>
                </TouchableHighlight>
            </View>
        );
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
    pickerContainer: {
        // height: 60,
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        borderColor: '#ededed',
        borderRadius: 4,
    },
    pickerTitle: {
        fontSize: 16,
        color: 'blue',
        marginBottom : 5,
    },
});