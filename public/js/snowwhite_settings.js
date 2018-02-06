var settings = {
    "symbolSize": 220,
    "spaceBetweenReels": 30,

    "numOfRows": 3,
    "numOfReels": 5,

    "animationType": "spin",

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

    "helpType": "slider",

    "symbolsImagesPath": "public/img/games/snowwhite/symbols/",
    "symbolsAnimationsPath": "public/img/games/snowwhite/symbols/animations/",

    "symbols": [
        {
            "image": "1.png",
            "paytable":[ 0, 0, 10, 40, 150 ],
        }, {
            "image": "2.png",
            "paytable": [ 0, 0, 10, 40, 150 ],
        }, {
            "image": "3.png",
            "paytable": [ 0, 0, 10, 40, 150 ],
        }, {
            "image": "4.png",
            "paytable": [ 0, 0, 5, 20, 100 ],
        }, {
            "image": "5.png",
            "paytable": [ 0, 0, 5, 20, 100 ],
        }, {
            "image": "6.png",
            "paytable": [ 0, 10, 100, 1000, 5000 ],
        }, {
            "image": "7.png",
            "isScatter": true,
            "paytable": [ 0, 0, 0, 0, 0 ],
        }, {
            "image": "8.png",
            "isScatter": true,
            "paytable": [ 0, 0, 0, 0, 0 ],
        },
        {
            "image": "9.png",
            "paytable": [ 0, 5, 50, 200, 1000 ],
        },
        {
            "image": "10.png",
            "paytable": [ 0, 5, 15, 75, 250 ],
        },
        {
            "image": "11.png",
            "isScatter": true,
            "paytable": [ 0, 0, 0, 0, 0 ],
        },
        {
            "image": "12.png",
            "paytable": [ 0, 5, 25, 100, 500 ],
        },
    ]
}
