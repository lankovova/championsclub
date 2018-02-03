var settings = {
    "symbolSize": 233,
    "spaceBetweenReels": 23,

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

    "imagesPath": "public/img/games/bookofwinner/",
    "helpType": "slider",

    "symbolsImagesPath": "public/img/games/computerworld/symbols/",
    "symbolsAnimationsPath": "public/img/games/computerworld/symbols/animations/",

    "symbols": [
        {
            "image": "1.png",
            // "animation": {
            //     "image": "1.png",
            //     "frames": 34
            // },
            "paytable": [0,0,5,25,100]
        }, {
            "image": "2.png",
            // "animation": {
            //     "image": "2.png",
            //     "frames": 10
            // },
            "paytable": [0,0,5,40,150]
        }, {
            "image": "3.png",
            // "animation": {
            //     "image": "3.png",
            //     "frames": 22
            // },
            "paytable": [0,5,40,400,2000]
        }, {
            "image": "4.png",
            // "animation": {
            //     "image": "4.png",
            //     "frames": 23
            // },
            "paytable": [0,10,100,1000,5000]
        }, {
            "image": "5.png",
            // "animation": {
            //     "image": "5.png",
            //     "frames": 9
            // },
            "isScatter": true,
            "paytable": [0,0,5,25,100]
        }, {
            "image": "6.png",
            // "animation": {
            //     "image": "6.png",
            //     "frames": 11
            // },
            "paytable": [0,0,5,40,150]
        }, {
            "image": "7.png",
            // "animation": {
            //     "image": "7.png",
            //     "frames": 34
            // },
            "paytable": [0,0,3,30,300]
        }, {
            "image": "8.png",
            // "animation": {
            //     "image": "8.png",
            //     "frames": 11
            // },
            "paytable": [00,5,30,100,750]
        }, {
            "image": "9.png",
            // "animation": {
            //     "image": "9.png",
            //     "frames": 29
            // },
            "paytable": [0,5,30,100,750]
        }, {
            "image": "10.png",
            // "animation": {
            //     "image": "10.png",
            //     "frames": 36
            // },
            "paytable": [0,0,5,40,150]
        },
    ],
}
