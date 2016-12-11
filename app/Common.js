/**
 * Created by Kalpana and Suman on 12/9/16.
 */

import React, {Component} from 'react';
import {Text} from 'react-native';
import styles from './CommonStyles'

const MyText = ({data, style}) => ( <Text style={[styles.text, style]}>{data}</Text> );

export default MyText