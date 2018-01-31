var settings = {
    "symbolSize": 170,
    "spaceBetweenReels": 60,

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
    "spinAnimTimingFunc": "ease-in-out",
    "fallAnimTimingFunc": "cubic-bezier(.79,1.51,.74,.84)",

    "gamblePreviousCardsAmount": 7,
    "gambleExtended": true,

    "symbolsImagesPath": "public/img/games/bananas/symbols/",
    "symbolsAnimationsPath": "public/img/games/bananas/symbols/animations/",

    "symbols": [
        {"image": "1.png"},
        {"image": "2.png"},
        {"image": "3.png"},
        {"image": "4.png"},
        {"image": "5.png"},
        {"image": "6.png"},
        {"image": "7.png"},
        {"image": "8.png"},
        {"image": "9.png"},
        {"image": "10.png"},
        {"image": "11.png"},
        {"image": "12.png"},
        {"image": "13.png"}
    ],
    "linePresenterLeftLines": [
        {lineIndex: 3, color: "rgb(252, 252, 0)"},
        {lineIndex: 1, color: "rgb(255, 0, 0)"},
        {lineIndex: 7, color: "rgb(255, 181, 0)"},
        {lineIndex: 5, color: "rgb(139, 251, 155)"},
        {lineIndex: 9, color: "rgb(133, 213, 254)"},
        {lineIndex: 0, color: "rgb(252, 252, 252)"},
        {lineIndex: 6, color: "rgb(142, 252, 252)"},
        {lineIndex: 8, color: "rgb(0, 213, 0)"},
        {lineIndex: 2, color: "rgb(116, 89, 249)"},
        {lineIndex: 4, color: "rgb(231, 60, 204)"}
    ]
}
