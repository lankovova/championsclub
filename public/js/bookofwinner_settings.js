var settings = {
    "symbolSize": 233,
    "spaceBetweenReels": 23,

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
    "gambleExtended": true,

    "helpType": "slider",

    "symbolsImagesPath": "public/img/games/bookofwinner/symbols/",
    "symbolsAnimationsPath": "public/img/games/bookofwinner/symbols/animations/",

    "symbols": [
        {
            "image": "1.png",
            "animation": {
                "image": "1.png",
                "frames": 34
            },
            "isScatter": true
        }, {
            "image": "2.png",
            "animation": {
                "image": "2.png",
                "frames": 10
            }
        }, {
            "image": "3.png",
            "animation": {
                "image": "3.png",
                "frames": 22
            }
        }, {
            "image": "4.png",
            "animation": {
                "image": "4.png",
                "frames": 23
            }
        }, {
            "image": "5.png",
            "animation": {
                "image": "5.png",
                "frames": 9
            }
        }, {
            "image": "6.png",
            "animation": {
                "image": "6.png",
                "frames": 11
            }
        }, {
            "image": "7.png",
            "animation": {
                "image": "7.png",
                "frames": 34
            }
        }, {
            "image": "8.png",
            "animation": {
                "image": "8.png",
                "frames": 11
            }
        }, {
            "image": "9.png",
            "animation": {
                "image": "9.png",
                "frames": 29
            }
        }, {
            "image": "10.png",
            "animation": {
                "image": "10.png",
                "frames": 36
            }
        },
    ]
}
