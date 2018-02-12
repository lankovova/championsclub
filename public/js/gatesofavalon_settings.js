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

    "symbolsImagesPath": "public/img/games/gatesofavalon/symbols/",
    "symbolsAnimationsPath": "public/img/games/gatesofavalon/symbols/animations/",

    "symbols": [
        {
            "image": "1.png",
            "paytable": [0,0,5,20,100]
        }, {
            "image": "2.png",
            "paytable": [0,0,10,50,100]
        }, {
            "image": "3.png",
            "paytable": [0,0,20,100,600]
        }, {
            "image": "4.png",
            "paytable": [0,10,300,3000,10000]
        }, {
            "image": "5.png",
            "paytable": [0,5,50,300,1000] //joker in free games
        }, {
            "image": "6.png",
            "paytable": [0,0,25,200,800]
        }, {
            "image": "7.png",
            "paytable": [0,0,15,75,400]
        }, {
            "image": "8.png",
            "paytable": [0,0,5,20,100]
        }, {
            "image": "9.png",
            "paytable": [0,0,10,50,100]
        }, {
            "image": "10.png",
            "paytable": [0,0,15,75,400]
        },
        {
            "image": "11.png",
			"isScatter": true,
            "paytable": [0,2,5,20,500] //Scatter
        },
        {
            "image": "12.png",
            "paytable": [0,0,10,50,100]
        },
            
    ]
}
