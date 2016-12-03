/**
 * Created by Kalpana and Suman on 12/1/16.
 */

exports.FetchStockSymbols = function () {
    //TODO: make server call
    return [
        {
            'symbol': 'GPRO',
            'name': 'GOPRO'
        },
        {
            'symbol': 'GOOG',
            'name': 'GOOGLE'
        },
        {
            'symbol': 'NFLX',
            'name': 'NETFLIX'
        },
        {
            'symbol': 'NKE',
            'name': 'NIKE'
        }
    ]
};

// Fetches data for home view
// 1. Top trending stocks
// 2. Top users list
// 3. User score summary, open predictions
exports.FetchHomeViewData = function() {

    //TODO: make server call
    let topUsers = [];
    for (let i=0; i< 10; i++) {
        topUsers.push({"name" : `"Foo${i}"`, "score" : 1000+i})
    }
    let data =  {
        "userSummary" : {
            "name" : "James Bond",
            "score" : 200,
            "openPredictions" : [
                {
                    "symbol" : "NFLX",
                    "willGain" : false
                },
                {
                    "Symbol" : "GOOG",
                    "WillLose" : false
                },
                {
                    "Symbol" : "NKE",
                    "WillGain2Perc" : true
                },
                {
                    "Symbol" : "AMBA",
                    "WillGain5Perc" : true
                }
            ]
        },
        "trendingStocks" : [
            {
                "symbol" : "GOOG",
                "predictions" : 123
            },
            {
                "symbol" : "NKE",
                "predictions" : 100
            },
            {
                "symbol" : "AMBA",
                "predictions" : 110
            },
            {
                "symbol" : "GPRO",
                "predictions" : 120
            }
        ],
        "topUsers" : topUsers
    };
    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            resolve(data);
        }, 2000)
    } );
};
