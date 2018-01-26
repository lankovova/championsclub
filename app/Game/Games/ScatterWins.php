<?php

namespace App\Game\Games;

use App\Game\Games\Game;

class Bananas extends Game {
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