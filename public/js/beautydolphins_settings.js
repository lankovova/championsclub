var settings = {
    "symbolSize": 220,
    "spaceBetweenReels": 30,

    "numOfRows": 3,
    "numOfReels": 5,

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

    "symbolsImagesPath": "public/img/games//beautydolphins/symbols/",
    "symbolsAnimationsPath": "public/img/games/beautydolphins/symbols/animations/",

    "symbols": [
        {"image": "1.png"},
        {"image": "2.png"},
        {"image": "3.png"},
        {"image": "4.png"},
        {"image": "5.png"},
        {"image": "6.png"},
        {"image": "7.png"},
        {"image": "8.png"},
        {"image": "9.png"},
        {"image": "10.png", "isScatter": true},
        {"image": "11.png"},
        {"image": "12.png"},
        {"image": "13.png"}
    ]
}
