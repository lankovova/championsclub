var settings = {
    "gameType": "old",

    "symbolWidth": 205,
    "symbolHeight": 170,
    "spaceBetweenReels": 29,

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

    "gamblePreviousCardsAmount": 5,
    "gambleExtended": false,
    
    "imagesPath": "public/img/games/bookofra/",
    "symbolsImagesPath": "public/img/games/bookofra/symbols/",
    "symbolsAnimationsPath": "public/img/games/bookofra/symbols/animations/",

    "lines": [1, 2, 3, 4, 5, 6, 7, 8, 9],

    "symbols": [
        {
            "image": "1.png",
            "paytable": [0, 0, 5, 25, 100], 
        },
        {
            "image": "2.png",
            "paytable": [0, 0, 5, 40, 150],
        },
        {
            "image": "3.png",
            "paytable": [0, 0, 3, 30, 300], 
        },
        {
            "image": "4.png",
            "paytable": [0, 5, 30, 100, 750], 
        },
        {
            "image": "5.png",
            "paytable": [0, 0, 5, 25, 100],
        },
        {
            "image": "6.png",
            "paytable": [0, 0, 5, 40, 150], 
        },
        {
            "image": "7.png",
            "paytable": [0, 10, 100, 1000, 5000], 
        },
        {
            "image": "8.png",
            "paytable": [0, 0, 3, 30, 300], 
        },
        {
            "image": "9.png",
            "paytable": [0, 5, 40, 400, 2000], 
        },
        {
            "image": "10.png", 
            "paytable": [0, 5, 30, 100, 750],  
            "isScatter": true
        }
    ],
    "linePresenter": [
        {lineIndex: 3, color: "rgb(252, 252, 0)"},
        {lineIndex: 1, color: "rgb(255, 0, 0)"},
        {lineIndex: 7, color: "rgb(255, 181, 0)"},
        {lineIndex: 5, color: "rgb(139, 251, 155)"},
        {lineIndex: 0, color: "rgb(133, 213, 254)"},
        {lineIndex: 6, color: "rgb(252, 252, 252)"},
        {lineIndex: 8, color: "rgb(142, 252, 252)"},
        {lineIndex: 2, color: "rgb(0, 213, 0)"},
        {lineIndex: 4, color: "#de20ff"}
    ],

    "presentersDefaultColor": "#a8bcc8"
}
