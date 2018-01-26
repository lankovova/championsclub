var settings = {
    "symbolSize": 220,
    "spaceBetweenReels": 30,

    "numOfRows": 3,
    "numOfReels": 3,

    "animationType": 'fall',

    "numOfSpinsBeforeStop": 3,

    "delayBetweenShowingWinningLines": 700,
    "delayBetweenReelsSpin": 200,
    "delayBetweenFallingSymbols": 300,

    // Do not set this delay lower than 50 ms
    // due to the slow browsers perfomance
    "delayBeforeStartReelsSpin": 200,
    "spinAnimationTimeInMs": 1000,
    "spinAnimTimingFunc": "ease-in-out",
    "fallAnimTimingFunc": "cubic-bezier(.79,1.51,.74,.84)",

    "gamblePreviousCardsAmount": 7,
    "gambleExtended": true,

    "symbolsImagesPath": "public/img/games/scatterwins/symbols/",
    "symbolsAnimationsPath": "public/img/games/scatterwins/symbols/animations/",

    "symbols": [
        {"image": "1.png"},
        {"image": "2.png"},
        {"image": "3.png"},
        {"image": "4.png"},
        {"image": "5.png"},
        {"image": "6.png"},
        {"image": "7.png"}
    ],

    "lines": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],

    "lineTypes": [
        [ [1, 0], [1, 1], [1, 2] ],
        [ [0, 0], [0, 1], [0, 2] ],
        [ [2, 0], [2, 1], [2, 2] ],
        [ [0, 0], [1, 1], [2, 2] ],
        [ [2, 0], [1, 1], [0, 2] ], //5
        [ [0, 0], [1, 1], [0, 2] ],
        [ [2, 0], [1, 1], [2, 2] ],
        [ [1, 0], [0, 1], [1, 2] ], //8
        [ [1, 0], [2, 1], [1, 2] ], //9
        [ [2, 0], [1, 1], [1, 2] ], //10
        [ [0, 0], [1, 1], [1, 2] ], //11
        [ [1, 0], [2, 1], [2, 2] ], //12
        [ [1, 0], [0, 1], [0, 2] ], //13
        [ [1, 0], [1, 1], [2, 2] ], //14
        [ [1, 0], [1, 1], [0, 2] ], //15
        [ [2, 0], [2, 1], [1, 2] ], //16
        [ [0, 0], [0, 1], [1, 2] ],
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
        {lineIndex: 9, color: "rgb(255, 199, 0)"},
        {lineIndex: 15, color: "rgb(255, 199, 0)"},
        {lineIndex: 11, color: "rgb(255, 199, 0)"},
        {lineIndex: 13, color: "rgb(255, 199, 0)"},
    ]
}
