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

    "gamblePreviousCardsAmount": 7,
    "gambleExtended": true,

    "helpType": "slider",

    "symbolsImagesPath": "public/img/games/luckyladysglamor/symbols/",
    "symbolsAnimationsPath": "public/img/games/luckyladysglamor/symbols/animations/",

    "symbols": [
        {
            "image": "1.png",
            "paytable": [0, 2, 5, 25, 100],
        }, {
            "image": "2.png",
            "paytable": [0, 0, 5, 25, 100],
        }, {
            "image": "3.png",
            "paytable": [0, 0, 10, 50, 125],
        }, {
            "image": "4.png",
            "paytable": [0, 0, 15, 75, 250],
        }, {
            "image": "5.png",
            "paytable": [0, 0, 15, 75, 250],
        }, {
            "image": "6.png",
            "paytable": [0, 10, 250, 2500, 9000],
        }, {
            "image": "7.png",
            "paytable": [0, 2, 25, 125, 750],
        }, {
            "image": "8.png",
            "paytable": [0, 0, 20, 100, 400],
        }, {
            "image": "9.png",
            "paytable": [0, 0, 5, 25, 100],
        }, {
            "image": "10.png",
            "paytable": [0, 0, 10, 50, 125],
        }, {
            "image": "11.png",
            "paytable": [0, 0, 5, 25, 100],
        }, {
            "image": "12.png",
            "paytable": [0, 2, 5, 20, 500],
            "isScatter": true,
        }, {
            "image": "13.png",
            "paytable": [0, 2, 25, 125, 750]
        },
    ]
}
