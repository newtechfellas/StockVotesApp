/**
 * Created by Kalpana and Suman on 12/1/16.
 */

import mock from './mockdata'

exports.FetchStockSymbols = function () {
    //TODO: make server call
    return mock.MockFetchStockSymbols();
};

// Fetches data for home view
// 1. Top trending stocks
// 2. Top users list
// 3. User score summary, open predictions
exports.FetchHomeViewData = function() {

    //TODO: make server call
    return mock.MockHomeViewData()
};

exports.FetchStockDetailsViewData = function(symbol) {

    //TODO: make server call
    return mock.MockFetchStockDetails(symbol)
};

exports.backgroundColorForPredictionType = function (predictionType) {
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
};

exports.descriptionForPredictionType = function (predictionType) {
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
};