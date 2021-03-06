<?php

namespace App\Game\Games;

use App\Game\Games\Game;

class Nautilus extends Game {
    public static $reelsAmount = 5;
    public static $scatter = 3;
    public static $joker = 8;
    public static $freeSpinsAmount = 15;
    public static $symbolsAmount = 13;
    public static $paytable = [
        [0, 2, 5, 25, 100], // 0
        [0, 0, 5, 25, 100], // 1
        [0, 0, 10, 50, 125], // 2
        [0, 2, 5, 20, 500], // 3
        [0, 0, 20, 100, 400], // 4
        [0, 0, 5, 25, 100], // 5
        [0, 0, 10, 50, 125], // 6
        [0, 2, 25, 125, 750], // 7
        [0, 10, 250, 2500, 9000], // 8
        [0, 2, 25, 125, 750], // 9
        [0, 0, 5, 25, 100], // 10
        [0, 0, 15, 75, 250], // 11
        [0, 0, 15, 75, 250], // 12
    ];

    function __construct($game) {
        $this->game = $game;
    }

    public function spin() {
        return $this->game->spin("checkForWinCombos");
    }

    public function bonusSpin() {
        return $this->game->bonusSpin("FreeSpinsMultiplier");
    }

    public function areBonusSpins() {
        return $this->game->areBonusSpins();
    }

}
