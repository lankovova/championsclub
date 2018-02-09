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

    "spinAnimTimingFunc": "cubic-bezier(1,1.26,.66,.93)",
    "fallAnimTimingFunc": "cubic-bezier(.79,1.51,.74,.84)",

    "gamblePreviousCardsAmount": 7,
    "gambleExtended": true,

    "helpType": "slider",

    "symbolsImagesPath": "public/img/games/goldenharvest/symbols/",
    "symbolsAnimationsPath": "public/img/games/goldenharvest/symbols/animations/",

    "bonusSpinAnimation": "reveal",
    "revealAnimation": {
        "image": "reveal.png",
        "frames": 6
    },

    "symbols": [
        {
            "image": "1.png",
            "paytable": [0,2,4,30,100]
        }, {
            "image": "2.png",
            "paytable": [0,0,4,30,100]
        }, {
            "image": "3.png",
            "paytable": [0,0,10,50,120]
        }, {
            "image": "4.png",
            "paytable": [0,2,30,120,800]
        }, {
            "image": "5.png",
            "paytable": [0,0,20,100,400]
        }, {
            "image": "6.png",
            "paytable": [0,0,20,70,250]
        }, {
            "image": "7.png",
            "paytable": [0,2,30,120,800]
        }, {
            "image": "8.png",
            "paytable": [0,0,4,30,100]
        }, {
            "image": "9.png",
            "paytable": [0,10,250,2500,9000]
        }, {
            "image": "10.png",
            "paytable": [0,0,10,50,120]
        },
        {
            "image": "11.png",
            "isScatter": true,
            "paytable": [0,2,4,20,500]
        },
        {
            "image": "12.png",
            "paytable": [0,0,4,30,100]
        },
        {
            "image": "13.png",
            "paytable": [0,0,20,70,250]
        },
    ]
}
