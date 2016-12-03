/**
 * Created by Kalpana and Suman on 12/1/16.
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';
import {Actions} from 'react-native-router-flux'

class StockDetailsScene extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        //Update title after launch to reflect the current stock
        Actions.refresh({title : this.props.stock.symbol})
    }

    render() {
        let {stock} = this.props;
        return (
            <View style={styles.stockDetails}>
                {/*<TouchableHighlight onPress={Actions.pop} style={styles.cancel}>*/}
                    {/*<Text style={{color: 'green'}}>X</Text>*/}
                {/*</TouchableHighlight>*/}
                <Text>{stock.symbol}</Text>
            </View>
        )
    }
}

export default StockDetailsScene

const styles = StyleSheet.create({
    stockDetails : {
        marginTop : 50,
        flex : 1,
        flexDirection: 'row'
    },
    cancel: {
        alignItems: 'flex-start',
        flex: 0.1,
        paddingLeft: 10
    },
});