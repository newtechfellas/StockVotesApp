/**
 * Created by Kalpana and Suman on 11/30/16.
 */

import React, {Component} from 'react';
import {Navigator} from 'react-native';
import {Actions, Scene, Animations, Router} from 'react-native-router-flux';
import HomeScene from './home/HomeScene'
import SearchScene from './search/SearchScene'
import StockDetailsScene from './search/StockDetailsScene'


const scenes = Actions.create(
    <Scene key="root">
        <Scene key="home" component={HomeScene} title="Home" initial={true} hideNavBar={true} />
        <Scene key="search" direction="vertical" component={SearchScene} title="Search"   />
        <Scene key="stockDetails" direction="vertical" component={StockDetailsScene} title="StockDetails"  hideNavBar={false} />
    </Scene>
);

export default scenes