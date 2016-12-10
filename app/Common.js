/**
 * Created by Kalpana and Suman on 12/9/16.
 */

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