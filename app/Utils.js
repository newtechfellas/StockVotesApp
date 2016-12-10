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

