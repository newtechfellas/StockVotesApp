/**
 * Created by Kalpana and Suman on 12/9/16.
 */

import React, {Component} from 'react';
import {View,Text,ActivityIndicator} from 'react-native';
import styles from './CommonStyles'

const MyText = ({data, style}) => ( <Text style={[styles.text, style]}>{data}</Text> );

const LoadingView = () => (
    <View style={styles.loadingIndicator}>
        <ActivityIndicator color='#85c559' size='large' />
    </View>
);
export {MyText, LoadingView}