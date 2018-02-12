var settings = {
    "gameType": "old",

    "symbolWidth": 205,
    "symbolHeight": 170,
    "spaceBetweenReels": 29,

    "numOfRows": 3,
    "numOfReels": 5,

    "animationType": "spin",

    "numOfSpinsBeforeStop": 3,

    "delayBetweenShowingWinningLines": 700,
    "delayBetweenReelsSpin": 200,
    "delayBetweenFallingSymbols": 300,

    // Do not set this delay lower than 50 ms
    // due to the slow browsers perfomance
    "delayBeforeStartReelsSpin": 200,
    "spinAnimationTimeInMs": 1000,

    "gamblePreviousCardsAmount": 5,
    "gambleExtended": false,

    "backSuitInPreviousCards": true,

    "imagesPath": "public/img/games/computerworldold/",
    "symbolsImagesPath": "public/img/games/computerworldold/symbols/",
    "symbolsAnimationsPath": "public/img/games/computerworldold/symbols/animations/",

    "symbols": [
        {
            "image": "1.png",
            "paytable": [0,0,5,25,100]
        }, {
            "image": "2.png",
            "paytable": [0,0,5,40,150]
        }, {
            "image": "3.png",
            "paytable": [0,5,40,400,2000]
        }, {
            "image": "4.png",
            "paytable": [0,10,100,1000,5000]
        }, {
            "image": "5.png",
            "paytable": [0,0,5,25,100]
        }, {
            "image": "6.png",
            "paytable": [0,0,5,40,150]
        }, {
            "image": "7.png",
            "isScatter": true,
            "paytable": [0,0,3,30,300]
        }, {
            "image": "8.png",
            "paytable": [00,5,30,100,750]
        }, {
            "image": "9.png",
            "paytable": [0,5,30,100,750]
        }, {
            "image": "10.png",
            "paytable": [0,0,5,25,100]
        },
    ],

    "linePositionCorrection": [
        {lineIndex: 0, offset: 25},
        {lineIndex: 1, offset: -10},
        {lineIndex: 2, offset: 15},
        {lineIndex: 3, offset: -60},
        {lineIndex: 4, offset: 65},
        {lineIndex: 5, offset: -60},
        {lineIndex: 6, offset: 65},
        {lineIndex: 7, offset: 45},
        {lineIndex: 8, offset: -40},
        {lineIndex: 9, offset: -25},
        {lineIndex: 10, offset: 40},
        {lineIndex: 11, offset: -25},
        {lineIndex: 12, offset: -10},
        {lineIndex: 13, offset: 10},
        {lineIndex: 14, offset: -75},
        {lineIndex: 15, offset: 80},
        {lineIndex: 16, offset: -60},
        {lineIndex: 17, offset: 60},
        {lineIndex: 18, offset: 45},
        {lineIndex: 19, offset: -40}
    ],

    "presentersDefaultColor": "#a8bcc8"
}
