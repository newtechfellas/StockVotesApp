/**
 * Created by Kalpana and Suman on 12/6/16.
 */

exports.MockHomeViewData = function () {
    let topUsers = [];
    for (let i = 0; i < 10; i++) {
        topUsers.push({"name": `"Foo${i}"`, "score": 1000 + i})
    }
    let data = {
        "userSummary": {
            "name": "James Bond",
            "score": 200,
            "openPredictions": [
                {
                    "symbol": "NFLX",
                    "type": "G",
                },
                {
                    "symbol": "GOOG",
                    "type": "L",
                },
                {
                    "symbol": "NKE",
                    "type": "2G",
                },
                {
                    "symbol": "AMBA",
                    "type": "5G",
                },
                {
                    "symbol": "DO",
                    "type": "2L",
                }
            ]
        },
        "trendingStocks": [
            {
                "symbol": "GOOG",
                "predictions": 123
            },
            {
                "symbol": "NKE",
                "predictions": 100
            },
            {
                "symbol": "AMBA",
                "predictions": 110
            },
            {
                "symbol": "GPRO",
                "predictions": 120
            }
        ],
        "topUsers": topUsers
    };
    return wrapWithPromise(data);
};

exports.MockFetchStockSymbols = function () {
    let data = [
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
        },
        {
            'symbol': 'DO',
            'name': 'Diamond Offshore Drillings'
        }
    ];
    return wrapWithPromise(data);
};

function wrapWithPromise(data) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(data);
        }, 1000)
    });
}