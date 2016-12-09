/**
 * Created by Kalpana and Suman on 11/29/16.
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ScrollView, TouchableHighlight} from 'react-native';
import {Actions} from 'react-native-router-flux'

export default class OpenPredictions extends Component {
    render() {
        let {predictions} = this.props;
        let predictionRows = predictions.map((prediction, i) => <OpenPredictionItem key={i} prediction={prediction}
                                                                                    backgroundColor={backgroundColorFor(prediction.type)}
                                                                                    borderColor={backgroundColorFor(prediction.type)}/>);
        return (
            <View style={styles.OpenPredictions}>
                <Text style={styles.openPredictionTitle}>Active Predictions</Text>
                <ScrollView keyboardDismissMode='on-drag'
                            keyboardShouldPersistTaps={true}
                >
                    {predictionRows}
                </ScrollView>
            </View>
        )
    }
}

const OpenPredictionItem = ({prediction, backgroundColor, borderColor}) => (
    <TouchableHighlight onPress={() => Actions.stockDetails({stock: prediction})}>
        <View style={styles.openPredictionItem}>
            <Text style={styles.predictionSymbol}>{prediction.symbol}</Text>
            <View style={[styles.predictionValueContainer, {backgroundColor} , {borderColor}]}>
                <Text style={styles.predictionValue}>{predictionValueDescription(prediction.type)}</Text>
            </View>
        </View>
    </TouchableHighlight>
);

function backgroundColorFor(predictionType) {
    switch (predictionType) {
        case 'G' :
        case '2G' :
        case '5G' :
            return '#21ce99';
        case 'L' :
        case '2L' :
        case '5L' :
            return '#f66323';
    }
}

function predictionValueDescription(predictionType) {
    switch (predictionType) {
        case 'G' :
            return 'BULLISH';
        case '2G' :
            return '2% BULLISH';
        case '5G' :
            return '5% BULLISH';
        case 'L' :
            return 'BEARISH';
        case '2L' :
            return '2% BEARISH';
        case '5L' :
            return '5% BEARISH';
    }
}

const styles = StyleSheet.create({
    OpenPredictions: {
        flex: 1,
    },
    openPredictionTitle: {
        fontSize: 12,
        color: 'blue',
        marginBottom: 10
    },
    predictionValueContainer: {
        backgroundColor: '#85c559',
        width: 100,
        height: 30,

        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#85c559'
    },
    predictionValue: {
        textAlign: 'center',
        color: 'white',
        paddingTop: 5,
    },
    predictionSymbol: {
        paddingTop: 7,
        height: 30,
    },
    predictionIcon: {
        resizeMode: 'contain',
        height: 25,
        // width : 15,
        marginTop: 5
    },
    openPredictionItem: {
        height: 35,
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 5,
        paddingTop: 0,
        paddingBottom: 15,
        borderBottomWidth: 0.5,
        borderColor: 'green',
        marginBottom: 15
    }
});
