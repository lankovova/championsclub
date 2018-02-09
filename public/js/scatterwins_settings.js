var settings = {
    "symbolWidth": 367,
    "symbolHeight": 233,
    "spaceBetweenReels": 77,

    "numOfRows": 3,
    "numOfReels": 3,

    "animationType": "fall",

    "numOfSpinsBeforeStop": 3,

    "delayBetweenShowingWinningLines": 700,
    "delayBetweenReelsSpin": 200,
    "delayBetweenFallingSymbols": 300,

    // Do not set this delay lower than 50 ms
    // due to the slow browsers perfomance
    "delayBeforeStartReelsSpin": 200,
    "spinAnimationTimeInMs": 1000,

    "gamblePreviousCardsAmount": 7,
    "gambleExtended": true,

    "symbolsImagesPath": "public/img/games/scatterwins/symbols/",
    "symbolsAnimationsPath": "public/img/games/scatterwins/symbols/animations/",

    "symbols": [
        {"image": "1.png", "paytable": [0, 0, 250]},
        {"image": "2.png", "paytable": [0, 0, 5]},
        {"image": "3.png", "paytable": [0, 0, 10]},
        {"image": "4.png", "paytable": [0, 0, 100]},
        {"image": "5.png", "paytable": [0, 0, 20]},
        {"image": "6.png", "paytable": [0, 0, 10], "isScatter": true},
        {"image": "7.png", "paytable": [0, 0, 500]}
    ],

    // "helpDisabled": true,

    "lines": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],

    "lineTypes": [
        [ [1, 0], [1, 1], [1, 2] ],
        [ [0, 0], [0, 1], [0, 2] ],
        [ [2, 0], [2, 1], [2, 2] ],
        [ [0, 0], [1, 1], [2, 2] ],
        [ [2, 0], [1, 1], [0, 2] ],
        [ [0, 0], [1, 1], [0, 2] ],
        [ [2, 0], [1, 1], [2, 2] ],
        [ [1, 0], [0, 1], [1, 2] ],
        [ [1, 0], [2, 1], [1, 2] ],
        [ [2, 0], [1, 1], [1, 2] ],
        [ [0, 0], [1, 1], [1, 2] ],
        [ [1, 0], [2, 1], [2, 2] ],
        [ [1, 0], [0, 1], [0, 2] ],
        [ [1, 0], [1, 1], [2, 2] ],
        [ [1, 0], [1, 1], [0, 2] ],
        [ [2, 0], [2, 1], [1, 2] ],
        [ [0, 0], [0, 1], [1, 2] ],
    ],

    "linePositionCorrection": [
        {lineIndex: 0, offset: 0},
        {lineIndex: 1, offset: 0},
        {lineIndex: 2, offset: 0},
        {lineIndex: 3, offset: -60},
        {lineIndex: 4, offset: 70},
        {lineIndex: 5, offset: 75},
        {lineIndex: 6, offset: -65},
        {lineIndex: 7, offset: -60},
        {lineIndex: 8, offset: 70},
        {lineIndex: 9, offset: 35},
        {lineIndex: 10, offset: -30},
        {lineIndex: 11, offset: -20},
        {lineIndex: 12, offset: 20},
        {lineIndex: 13, offset: 50},
        {lineIndex: 14, offset: -50},
        {lineIndex: 15, offset: 90},
        {lineIndex: 16, offset: -90}
    ],

    "linePresenterLeftLines": [
        {lineIndex: 3, color: "rgb(255, 199, 0)"},
        {lineIndex: 1, color: "rgb(255, 199, 0)"},
        {lineIndex: 5, color: "rgb(255, 199, 0)"},
        {lineIndex: 7, color: "rgb(255, 199, 0)"},
        {lineIndex: 0, color: "rgb(255, 199, 0)"},
        {lineIndex: 8, color: "rgb(255, 199, 0)"},
        {lineIndex: 6, color: "rgb(255, 199, 0)"},
        {lineIndex: 2, color: "rgb(255, 199, 0)"},
        {lineIndex: 4, color: "rgb(255, 199, 0)"},
    ],
    "linePresenterRightLines" : [
        {lineIndex: 14, color: "rgb(255, 199, 0)"},
        {lineIndex: 12, color: "rgb(255, 199, 0)"},
        {lineIndex: 16, color: "rgb(255, 199, 0)"},
        {lineIndex: 10, color: "rgb(255, 199, 0)"},
        {lineIndex: 9,  color: "rgb(255, 199, 0)"},
        {lineIndex: 15, color: "rgb(255, 199, 0)"},
        {lineIndex: 11, color: "rgb(255, 199, 0)"},
        {lineIndex: 13, color: "rgb(255, 199, 0)"},
    ]
}
