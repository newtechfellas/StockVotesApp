/**
 * Created by Kalpana and Suman on 11/30/16.
 */

import React, {Component} from 'react';
import {Navigator} from 'react-native';
import {Actions, Scene, Animations, Router} from 'react-native-router-flux';
import HomeScene from './home/HomeScene'
import SearchScene from './search/SearchScene'
import StockDetailsScene from './search/StockDetailsScene'
import UserProfile from './sidemenu/UserProfile'

/*
 Notes:
 1. panHandlers = {null} property required to prevent swipe back or down from popping the screen
 2. if you need to update the title at runtime, use componentDidMount method of the component reference to call refresh on Actions
 Ex: Actions.refresh({title : this.props.stock.symbol})
 */

const scenes = Actions.create(
    <Scene key="root"  >
        <Scene key="drawer" component={UserProfile} open={false}>
            <Scene key="home" component={HomeScene} panHandlers={null} title="Home" initial={true} hideNavBar={true} />
        </Scene>
        <Scene key="search" direction="vertical" panHandlers={null} component={SearchScene} title="Search" hideNavBar={true}  />
        <Scene key="stockDetails" direction="vertical" panHandlers={null} component={StockDetailsScene} title="StockDetails"  hideNavBar={false} />
    </Scene>
);

export default scenes