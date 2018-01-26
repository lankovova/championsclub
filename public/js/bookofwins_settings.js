var settings = {
    "symbolSize": 219,
    "spaceBetweenReels": 28,

    "numOfRows": 3,
    "numOfReels": 5,

    "animationType": "fall",

    "numOfSpinsBeforeStop": 2,

    "delayBetweenShowingWinningLines": 1400,
    "delayBetweenReelsSpin": 200,
    "delayBetweenFallingSymbols": 300,

    // Do not set this delay lower than 50 ms
    // due to the slow browsers perfomance
    "delayBeforeStartReelsSpin": 200,
    "spinAnimationTimeInMs": 1200,
    "spinAnimTimingFunc": "cubic-bezier(1,1.26,.66,.93)",
    "fallAnimTimingFunc": "cubic-bezier(.79,1.51,.74,.84)",

    "gamblePreviousCardsAmount": 7,
    "gambleExtended": false,

    "symbolsImagesPath": "public/img/games/bookofwins/symbols/",
    "symbolsAnimationsPath": "public/img/games/bookofwins/symbols/animations/",

    "symbols": [
        {
            "image": "1.png",
        }, {
            "image": "2.png",
        }, {
            "image": "3.png",
        }, {
            "image": "4.png",
        }, {
            "image": "5.png",
        }, {
            "image": "6.png",
        }, {
            "image": "7.png",
        }, {
            "image": "8.png",
        }, {
            "image": "9.png",
        }, {
            "image": "10.png",
            "isScatter": true
        },
    ]
}
