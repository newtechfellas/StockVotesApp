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
 Ex: componentDidMount() {
        //Update title after launch to reflect the current stock
        Actions.refresh({title : this.props.foo})
    }
 */

const STOCK_DETAILS_SCENE_KEY= "stockDetails";
const SEARCH_SCENE_KEY= "search";
const HOME_SCENE_KEY= "home";

const scenes = Actions.create(
    <Scene key="root"  >
        <Scene key="drawer" component={UserProfile} open={false}>
            <Scene key={HOME_SCENE_KEY} component={HomeScene} panHandlers={null} title="Home" initial={true} hideNavBar={true} />
        </Scene>
        <Scene key={SEARCH_SCENE_KEY} direction="vertical" panHandlers={null} component={SearchScene} title="Search" hideNavBar={true}  />
        <Scene key={STOCK_DETAILS_SCENE_KEY} direction="vertical" panHandlers={null} component={StockDetailsScene} title="StockDetails"  hideNavBar={true} />
    </Scene>
);

// -------- UGLY SOLUTION TO MAINTAIN A GLOBAL STACK OF SCENE NAMES TO GET CURRENT SCENE NAME FROM ANY VIEW
// react-native-router-flux does not have an option to get current scene name out of the box
// http://stackoverflow.com/questions/41416879/refresh-view-only-if-its-in-viewport

//refers to scene names stack. Instead of Actions.ACTION_NAME from View Components, PushScene method should be called
//begin the stack with HOME VIEW SCENE KEY
let GlobalSceneNamesStack = [HOME_SCENE_KEY];

const PushScene = (sceneKey, props) => {
    GlobalSceneNamesStack.push(sceneKey);
    switch (sceneKey) {
        case SEARCH_SCENE_KEY :
            Actions.search();
            return;
        case STOCK_DETAILS_SCENE_KEY :
            Actions.stockDetails(props);
            return;
        default:
            console.log("== ERROR == : Unknown scene key passed "+sceneKey);
    }
};

const PopScene = () => {
    GlobalSceneNamesStack.pop();
    Actions.pop()
};

const PopAndRefreshScene = () => {
    PopScene();
    setTimeout(() => Actions.refresh(), 200)
};

const GetCurrentSceneKey = () => {
    return GlobalSceneNamesStack.length > 0 ? GlobalSceneNamesStack[GlobalSceneNamesStack.length-1] : undefined
};

// ------ UGLY SOLUTION ENDS -----

export default scenes
export { SEARCH_SCENE_KEY, STOCK_DETAILS_SCENE_KEY, HOME_SCENE_KEY, PushScene, PopScene, PopAndRefreshScene, GetCurrentSceneKey }
