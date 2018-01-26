<?php

namespace App\Game\Games;

use App\Game\Games\Game;

class ScatterWins extends Game {
    public static $reelsAmount = 5;
    public static $scatter = 4;
    public static $joker = -1;
    public static $freeSpinsAmount = 10;
    public static $symbolsAmount = 7;
    public static $paytable = [
        [0, 0, 10], //PAYTABLE FOR SYMBOL 1
        [0, 0, 4],  //PAYTABLE FOR SYMBOL 2
        [0, 0, 10],  //PAYTABLE FOR SYMBOL 3
        [0, 0, 250],  //PAYTABLE FOR SYMBOL 4
        [0, 0, 4],    //PAYTABLE FOR SYMBOL 5
        [0, 0, 20],    //PAYTABLE FOR SYMBOL 6
        [0, 0, 4],     //PAYTABLE FOR SYMBOL 7
    ];

    public static $linesTypes = [
        [ [1, 0], [1, 1], [1, 2] ],
        [ [0, 0], [0, 1], [0, 2] ],
        [ [2, 0], [2, 1], [2, 2] ],
        [ [0, 0], [1, 1], [2, 2] ],
        [ [2, 0], [1, 1], [0, 2] ], //5
        [ [0, 0], [1, 1], [0, 2] ],
        [ [2, 0], [1, 1], [2, 2] ],
        [ [1, 0], [0, 1], [1, 2] ], //8
        [ [1, 0], [2, 1], [1, 2] ], //9
        [ [2, 0], [1, 1], [1, 2] ], //10
        [ [0, 0], [1, 1], [1, 2] ], //11
        [ [1, 0], [2, 1], [2, 2] ], //12
        [ [1, 0], [0, 1], [0, 2] ], //13
        [ [1, 0], [1, 1], [2, 2] ], //14
        [ [1, 0], [1, 1], [0, 2] ], //15
        [ [2, 0], [2, 1], [1, 2] ], //16
        [ [0, 0], [0, 1], [1, 2] ],
    ];

    function __construct($game) {
        $this->game = $game;
    }

    public function spin() {
        return $this->game->spin("checkForWinCombos");
    }

    public function bonusSpin() {
        return $this->game->bonusSpin("FreeSpins");
    }

    public function areBonusSpins() {
        return $this->game->areBonusSpins();
    }

}