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
            "animation": {
                "image": "1.png",
                "frames": 34
            },
            "paytable":[ 0, 0, 10, 40, 150 ],
        }, {
            "image": "2.png",
            "animation": {
                "image": "2.png",
                "frames": 10
            },
            "paytable": [ 0, 0, 10, 40, 150 ],
        }, {
            "image": "3.png",
            "animation": {
                "image": "3.png",
                "frames": 22
            },
            "paytable": [ 0, 0, 10, 40, 150 ],
        }, {
            "image": "4.png",
            "animation": {
                "image": "4.png",
                "frames": 23
            },
            "paytable": [ 0, 0, 5, 20, 100 ],
        }, {
            "image": "5.png",
            "animation": {
                "image": "5.png",
                "frames": 9
            },
            "isScatter": true,
            "paytable": [ 0, 0, 5, 20, 100 ],
        }, {
            "image": "6.png",
            "animation": {
                "image": "6.png",
                "frames": 11
            },
            "paytable": [ 0, 10, 100, 1000, 5000 ],
        }, {
            "image": "7.png",
            "animation": {
                "image": "7.png",
                "frames": 34
            },
            "paytable": [ 0, 0, 0, 0, 0 ],
        }, {
            "image": "8.png",
            "animation": {
                "image": "8.png",
                "frames": 11
            },
            "paytable": [ 0, 0, 0, 0, 0 ],
        },
        {
            "image": "9.png",
            "animation": {
                "image": "9.png",
                "frames": 11
            },
            "paytable": [ 0, 5, 50, 200, 1000 ],
        },
        {
            "image": "10.png",
            "animation": {
                "image": "10.png",
                "frames": 11
            },
            "paytable": [ 0, 5, 15, 75, 250 ],
        },
        {
            "image": "11.png",
            "animation": {
                "image": "11.png",
                "frames": 11
            },
            "paytable": [ 0, 0, 0, 0, 0 ],
        },
        {
            "image": "12.png",
            "animation": {
                "image": "12.png",
                "frames": 11
            },
            "paytable": [ 0, 5, 25, 100, 500 ],
        },
    ]
}
