/**
 * Created by Kalpana and Suman on 11/29/16.
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ScrollView, TouchableHighlight} from 'react-native';
import {Actions} from 'react-native-router-flux'
import util from '../Utils'
import MyText from '../Common'

export default class OpenPredictions extends Component {
    render() {
        let {predictions} = this.props;
        let predictionRows = predictions.map((prediction, i) => <OpenPredictionItem key={i} prediction={prediction}
                                                                                    backgroundColor={util.backgroundColorForPredictionType(prediction.type)}
                                                                                    borderColor={util.backgroundColorForPredictionType(prediction.type)}/>);
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
    <TouchableHighlight underlayColor='#efefef' onPress={() => Actions.stockDetails({stock: prediction})}>
        <View style={styles.openPredictionItem}>
            <MyText style={styles.predictionSymbol} data={prediction.symbol} />
            <View style={[styles.predictionValueContainer, {backgroundColor} , {borderColor}]}>
                <MyText style={styles.predictionValue} data={util.descriptionForPredictionType(prediction.type)}/>
            </View>
        </View>
    </TouchableHighlight>
);

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
