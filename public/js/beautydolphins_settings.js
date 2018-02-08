var settings = {
    "symbolSize": 219,
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

    "gamblePreviousCardsAmount": 7,
    "gambleExtended": true,

    "helpType": "slider",

    "symbolsImagesPath": "public/img/games//beautydolphins/symbols/",
    "symbolsAnimationsPath": "public/img/games/beautydolphins/symbols/animations/",

    "symbols": [
        {
            "image": "1.png",
            // "animation": {
            //     "image": "1.png",
            //     "frames": 34
            // },
            "paytable": [0, 0, 20, 100, 400],
        }, {
            "image": "2.png",
            // "animation": {
            //     "image": "2.png",
            //     "frames": 10
            // },
            "paytable": [0, 0, 5, 25, 100],
        }, {
            "image": "3.png",
            // "animation": {
            //     "image": "3.png",
            //     "frames": 22
            // },
            "paytable": [0, 0, 10, 50, 125], 
        }, {
            "image": "4.png",
            // "animation": {
            //     "image": "4.png",
            //     "frames": 23
            // },
            "paytable": [0,10,250,2500,9000],
        }, {
            "image": "5.png",
            // "animation": {
            //     "image": "5.png",
            //     "frames": 9
            // },
            "paytable": [0, 0, 15, 75, 250],
        }, {
            "image": "6.png",
            // "animation": {
            //     "image": "6.png",
            //     "frames": 11
            // },
            "paytable": [0, 0, 5, 25, 100], 
        }, {
            "image": "7.png",
            // "animation": {
            //     "image": "7.png",
            //     "frames": 34
            // },
            "paytable": [0, 0, 5, 25, 100], 
        }, {
            "image": "8.png",
            // "animation": {
            //     "image": "8.png",
            //     "frames": 11
            // },
            "paytable": [0, 2, 5, 25, 100],
        }, {
            "image": "9.png",
            // "animation": {
            //     "image": "9.png",
            //     "frames": 29
            // },
            "paytable": [0, 0, 15, 75, 250],
        }, {
            "image": "10.png",
            // "animation": {
            //     "image": "10.png",
            //     "frames": 36
            // },
            "isScatter": true,
            "paytable": [0, 2, 5, 20, 500],
        },
        {
            "image": "11.png",
            // "animation": {
            //     "image": "11.png",
            //     "frames": 36
            // },
            "paytable": [0, 2, 25, 125, 750],
        },
        {
            "image": "12.png",
            // "animation": {
            //     "image": "12.png",
            //     "frames": 36
            // },
            "paytable": [0, 2, 25, 125, 750],
        },
        {
            "image": "13.png",
            // "animation": {
            //     "image": "13.png",
            //     "frames": 36
            // },
            "paytable": [0, 0, 10, 50, 125] 
        },
    ]
}
