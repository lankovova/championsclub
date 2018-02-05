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
    "gambleExtended": false,

    "symbolsImagesPath": "public/img/games/hitjewels/symbols/",
    "symbolsAnimationsPath": "public/img/games/hitjewels/symbols/animations/",

    "symbols": [
        {
            "image": "1.png",
            "paytable":[0,0,30,150,500],
        }, {
            "image": "2.png",
            "paytable": [0,0,10,25,150],
        }, {
            "image": "3.png",
            "isScatter": true,
            "paytable": [0,0,2,10,50],
        }, {
            "image": "4.png",
            "paytable": [0,0,50,500,5000],
        }, {
            "image": "5.png",
            "paytable": [0,0,15,50,200],
        }, {
            "image": "6.png",
            "paytable": [0,0,15,50,200],
        }, {
            "image": "7.png",
            "paytable": [0,0,10,25,150],
        }, {
            "image": "8.png",
            "paytable": [0,0,30,150,500],
        },
    ]
}
