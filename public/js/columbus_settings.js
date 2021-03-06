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

    "symbolsImagesPath": "public/img/games/columbus/symbols/",
    "symbolsAnimationsPath": "public/img/games/columbus/symbols/animations/",

    "symbols": [
        {"image": "1.png","paytable": [0,0,10,40,150]},
        {"image": "2.png", "isScatter": true,"paytable": [0,0,0,0,0]},
        {"image": "3.png", "isScatter": true,"paytable": [0,0,0,0,0]},
        {"image": "4.png","paytable": [0,10,100,1000,5000]},
        {"image": "5.png","paytable": [0,5,25,100,500]},
        {"image": "6.png","paytable": [0,0,10,40,150]},
        {"image": "7.png","paytable": [0,0,10,40,150]},
        {"image": "8.png","paytable": [0,0,5,20,100]},
        {"image": "9.png","paytable": [0,5,15,75,250]},
        {"image": "10.png", "isScatter": true,"paytable": [0,0,0,0,0]},
        {"image": "11.png","paytable": [0,5,50,200,1000]},
        {"image": "12.png","paytable": [0,0,5,20,100]},
    ],

    "lines": [1, 2, 3, 4, 5, 6, 7, 8, 9],

    "linePositionCorrection": [
        {lineIndex: 0, offset: 0},
        {lineIndex: 1, offset: 0},
        {lineIndex: 2, offset: 0},
        {lineIndex: 3, offset: -60},
        {lineIndex: 4, offset: 65},
        {lineIndex: 5, offset: 60},
        {lineIndex: 6, offset: -55},
        {lineIndex: 7, offset: 55},
        {lineIndex: 8, offset: -50}
    ],

    "linePresenterLeftLines": [
        {lineIndex: 3, color: "rgb(252, 252, 0)"},
        {lineIndex: 1, color: "rgb(255, 0, 0)"},
        {lineIndex: 7, color: "rgb(255, 181, 0)"},
        {lineIndex: 6, color: "rgb(139, 251, 155)"},
        {lineIndex: 0, color: "rgb(133, 213, 254)"},
        {lineIndex: 5, color: "rgb(252, 252, 252)"},
        {lineIndex: 8, color: "rgb(142, 252, 252)"},
        {lineIndex: 2, color: "rgb(0, 213, 0)"},
        {lineIndex: 4, color: "#de20ff"}
    ],
    "linePresenterRightLines": [
        {lineIndex: 3, color: "rgb(252, 252, 0)"},
        {lineIndex: 1, color: "rgb(255, 0, 0)"},
        {lineIndex: 7, color: "rgb(255, 181, 0)"},
        {lineIndex: 6, color: "rgb(139, 251, 155)"},
        {lineIndex: 0, color: "rgb(133, 213, 254)"},
        {lineIndex: 5, color: "rgb(252, 252, 252)"},
        {lineIndex: 8, color: "rgb(142, 252, 252)"},
        {lineIndex: 2, color: "rgb(0, 213, 0)"},
        {lineIndex: 4, color: "#de20ff"}
    ],

    "presentersDefaultColor": "#b0b7b2"
}
