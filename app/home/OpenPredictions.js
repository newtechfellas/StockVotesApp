/**
 * Created by Kalpana and Suman on 11/29/16.
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ScrollView, TouchableHighlight} from 'react-native';
import {Actions} from 'react-native-router-flux'

export default class OpenPredictions extends Component {
    render() {
        let {predictions} = this.props;
        let predictionRows = predictions.map((prediction, i) => <OpenPredictionItem key={i} prediction={prediction}/>);
        return (
            <View style={styles.OpenPredictions}>
                <Text>Open Predictions</Text>
                <ScrollView keyboardDismissMode='on-drag'
                            keyboardShouldPersistTaps={true}
                >
                    {predictionRows}
                </ScrollView>
            </View>
        )
    }
}

const OpenPredictionItem = ({prediction}) => (
    <TouchableHighlight onPress={() => Actions.stockDetails({stock: prediction})}>
        <View style={styles.openPredictionItem}>
            <Text>{prediction.symbol} - {prediction.type} - {`${prediction.value}`}</Text>
        </View>
    </TouchableHighlight>
);

const styles = StyleSheet.create({
    OpenPredictions: {
        flex: 1
    },
    openPredictionItem: {
        padding: 5,
        borderBottomWidth: 0.5,
        marginBottom: 15
    }
});
