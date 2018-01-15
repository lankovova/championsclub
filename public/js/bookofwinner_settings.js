var settings = {
    // "symbolSize": 354,
    "symbolSize": 233,
    "spaceBetweenReels": 23,

    "numOfRows": 3,
    "numOfReels": 5,

    "animationType": 'fall',

    "numOfSpinsBeforeStop": 3,

    "delayBetweenShowingWinningLines": 2000,
    "delayBetweenReelsSpin": 200,
    "delayBetweenFallingSymbols": 300,
    // Do not set this delay lower than 50 ms
    // due to the slow browsers perfomance
    "delayBeforeStartReelsSpin": 200,
    "spinAnimationTimeInMs": 1000,
    "spinAnimTimingFunc": "ease-in-out",
    "fallAnimTimingFunc": "cubic-bezier(.79,1.51,.74,.84)",

    "symbolsImagesPath": "./assets/images/symbols/",
    "symbolsAnimationsPath": "./assets/images/symbols/animations/",

    "symbols": [
        {"image": "1.png"},
        {"image": "2.png"},
        {"image": "3.png"},
        {"image": "4.png", "animation": "4Anim.png"},
        {"image": "5.png"},
        {"image": "6.png"},
        {"image": "7.png"},
        {"image": "8.png"},
        {"image": "9.png"},
        {"image": "10.png"}
    ],

    "denominations": [1, 10, 25, 50, 100],
    "lines": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    "betPerLine": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30, 40, 50, 60, 70, 80, 90, 100],

    "lineTypes": [
        [ [1, 0], [1, 1], [1, 2], [1, 3], [1, 4] ],
        [ [0, 0], [0, 1], [0, 2], [0, 3], [0, 4] ],
        [ [2, 0], [2, 1], [2, 2], [2, 3], [2, 4] ],
        [ [0, 0], [1, 1], [2, 2], [1, 3], [0, 4] ],
        [ [2, 0], [1, 1], [0, 2], [1, 3], [2, 4] ],
        [ [1, 0], [0, 1], [0, 2], [0, 3], [1, 4] ],
        [ [1, 0], [2, 1], [2, 2], [2, 3], [1, 4] ],
        [ [0, 0], [0, 1], [1, 2], [2, 3], [2, 4] ],
        [ [2, 0], [2, 1], [1, 2], [0, 3], [0, 4] ],
        [ [1, 0], [2, 1], [1, 2], [0, 3], [0, 4] ],

        [ [1, 0], [2, 1], [1, 2], [2, 3], [1, 4] ],
        [ [1, 0], [0, 1], [1, 2], [0, 3], [1, 4] ],
        [ [0, 0], [1, 1], [0, 2], [1, 3], [0, 4] ],
        [ [2, 0], [1, 1], [2, 2], [1, 3], [2, 4] ],
        [ [1, 0], [1, 1], [0, 2], [1, 3], [1, 4] ],
        [ [1, 0], [1, 1], [2, 2], [1, 3], [1, 4] ],
        [ [0, 0], [0, 1], [1, 2], [0, 3], [0, 4] ],
        [ [2, 0], [2, 1], [1, 2], [2, 3], [2, 4] ],
        [ [0, 0], [1, 1], [1, 2], [1, 3], [0, 4] ],
        [ [2, 0], [1, 1], [1, 2], [1, 3], [2, 4] ]
    ],
    "linePresenterLeftLines": [
        {lineIndex: 4, color: 'rgb(252, 252, 0)'},
        {lineIndex: 2, color: 'rgb(255, 0, 0)'},
        {lineIndex: 8, color: 'rgb(255, 181, 0)'},
        {lineIndex: 6, color: 'rgb(139, 251, 155)'},
        {lineIndex: 9, color: 'rgb(133, 213, 254)'},
        {lineIndex: 0, color: 'rgb(252, 252, 252)'},
        {lineIndex: 5, color: 'rgb(142, 252, 252)'},
        {lineIndex: 7, color: 'rgb(0, 213, 0)'},
        {lineIndex: 1, color: 'rgb(116, 89, 249)'},
        {lineIndex: 3, color: 'rgb(231, 60, 204)'},
    ],
    "linePresenterRightLines" : [
        {lineIndex: 17, color: 'rgb(248, 248, 219)'},
        {lineIndex: 13, color: 'rgb(223, 170, 207)'},
        {lineIndex: 19, color: 'rgb(0, 185, 226)'},
        {lineIndex: 15, color: 'rgb(255, 91, 0)'},
        {lineIndex: 10, color: 'rgb(0, 108, 4)'},
        {lineIndex: 11, color: 'rgb(152, 152, 153)'},
        {lineIndex: 14, color: 'rgb(255, 44, 58)'},
        {lineIndex: 18, color: 'rgb(0, 244, 183)'},
        {lineIndex: 12, color: 'rgb(144, 3, 225)'},
        {lineIndex: 16, color: 'rgb(93, 113, 68)'},
    ]
}
