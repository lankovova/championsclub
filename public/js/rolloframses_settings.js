var settings = {
    "symbolSize": 220,
    "spaceBetweenReels": 30,

    "numOfRows": 3,
    "numOfReels": 5,

    "animationType": 'spin',

    "numOfSpinsBeforeStop": 3,

    "delayBetweenShowingWinningLines": 700,
    "delayBetweenReelsSpin": 200,
    "delayBetweenFallingSymbols": 300,

    // Do not set this delay lower than 50 ms
    // due to the slow browsers perfomance
    "delayBeforeStartReelsSpin": 200,
    "spinAnimationTimeInMs": 1000,

    "spinAnimTimingFunc": "cubic-bezier(1,1.26,.66,.93)",
    "fallAnimTimingFunc": "cubic-bezier(.79,1.51,.74,.84)",

    "gamblePreviousCardsAmount": 7,
    "gambleExtended": false,

    "imagesPath": "public/img/games/bookofwinner/",
    "helpType": "slider",

    "symbolsImagesPath": "public/img/games/rolloframses/symbols/",
    "symbolsAnimationsPath": "public/img/games/rolloframses/symbols/animations/",

    "symbols": [
        {
            "image": "1.png",
            "paytable": [0,0,5,25,100]
        }, {
            "image": "2.png",
            "paytable": [0,0,5,40,150]
        }, {
            "image": "3.png",
            "paytable": [0,5,30,100,750]
        }, {
            "image": "4.png",
            "paytable": [0,5,40,400,2000]
        }, {
            "image": "5.png",
            "paytable": [0,0,5,25,100]
        }, {
            "image": "6.png",
            "paytable": [0,0,5,40,150]
        }, {
            "image": "7.png",
            "paytable": [0,10,100,1000,5000]
        }, {
            "image": "8.png",
            "paytable": [0,0,5,25,100]
        }, {
            "image": "9.png",
            "isScatter": true,
            "paytable": [0,0,3,30,300]
        }, {
            "image": "10.png",
            "paytable": [0,5,30,100,750]
        },
    ]
}
