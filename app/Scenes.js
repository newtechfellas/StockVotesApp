/**
 * Created by Kalpana and Suman on 11/30/16.
 */

import React, {Component} from 'react';
import {Actions, Scene, Router} from 'react-native-router-flux';
import HomeView from './home/HomeView'
import SearchBar from './search/SearchBar'
import Header from './home/Header'


const scenes = Actions.create(
    <Scene key="root">
        <Scene key="home" component={HomeView} title="Home" initial={true} hideNavBar={true}/>
        <Scene key="search" component={SearchBar} title="Search" />
    </Scene>
);

export default scenes