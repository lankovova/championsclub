<?php

namespace App\Game\Games;

use App\Game\Games\Game;

class Bananas extends Game {
    public static $reelsAmount = 5;
    public static $scatter = 3;
    public static $joker = 4;
    public static $freeSpinsAmout = 10;
    public static $symbolsAmount = 10;
    public static $paytable = [
        [0, 0, 5, 25, 100],         // Symbol 1
        [0, 0, 5, 40, 150],         // Symbol 2
        [0, 0, 3, 30, 300],         // Symbol 3
        [0, 5, 30, 100, 750],       // Symbol 4
        [0, 0, 5, 25, 100],         // Symbol 5
        [0, 0, 5, 40, 150],         // Symbol 6
        [0, 10, 100, 1000, 5000],   // Symbol 7
        [0, 0, 5, 25, 100],         // Symbol 8
        [0, 5, 40, 400, 2000],      // Symbol 9
        [0, 5, 30, 100, 750]        // Symbol 10
    ];
    public static $linesTypes = [
        [ [1, 0], [1, 1], [1, 2], [1, 3], [1, 4] ],
        [ [0, 0], [0, 1], [0, 2], [0, 3], [0, 4] ],
        [ [2, 0], [2, 1], [2, 2], [2, 3], [2, 4] ],
        [ [0, 0], [1, 1], [2, 2], [1, 3], [0, 4] ],
        [ [2, 0], [1, 1], [0, 2], [1, 3], [2, 4] ],
        [ [1, 0], [0, 1], [0, 2], [0, 3], [1, 4] ],
        [ [1, 0], [2, 1], [2, 2], [2, 3], [1, 4] ],
        [ [0, 0], [0, 1], [1, 2], [2, 3], [2, 4] ],
        [ [2, 0], [2, 1], [1, 2], [0, 3], [0, 4] ],
        [ [1, 0], [2, 1], [1, 2], [0, 3], [0, 4] ],

        [ [1, 0], [2, 1], [1, 2], [2, 3], [1, 4] ],
        [ [1, 0], [0, 1], [1, 2], [0, 3], [1, 4] ],
        [ [0, 0], [1, 1], [0, 2], [1, 3], [0, 4] ],
        [ [2, 0], [1, 1], [2, 2], [1, 3], [2, 4] ],
        [ [1, 0], [1, 1], [0, 2], [1, 3], [1, 4] ],
        [ [1, 0], [1, 1], [2, 2], [1, 3], [1, 4] ],
        [ [0, 0], [0, 1], [1, 2], [0, 3], [0, 4] ],
        [ [2, 0], [2, 1], [1, 2], [2, 3], [2, 4] ],
        [ [0, 0], [1, 1], [1, 2], [1, 3], [0, 4] ],
        [ [2, 0], [1, 1], [1, 2], [1, 3], [2, 4] ]
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