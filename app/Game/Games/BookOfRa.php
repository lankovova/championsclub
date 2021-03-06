<?php

namespace App\Game\Games;

use App\Game\Games\Game;

class BookOfRa extends Game {
    public static $reelsAmount = 5;
    public static $scatter = 9;
    public static $joker = 9;
    public static $freeSpinsAmount = 10;
    public static $symbolsAmount = 10;
    public static $paytable = [
        [0, 10, 100, 1000, 5000],   // Symbol 0
        [0, 5, 40, 400, 2000],      // Symbol 1
        [0, 5, 30, 100, 750],       // Symbol 2
        [0, 5, 30, 100, 750],       // Symbol 3
        [0, 0, 5, 40, 150],         // Symbol 4
        [0, 0, 5, 40, 150],         // Symbol 5
        [0, 0, 5, 25, 100],         // Symbol 6
        [0, 0, 5, 25, 100],         // Symbol 7
        [0, 0, 5, 25, 100],         // Symbol 8
        [0, 0, 3, 30, 300]          // Symbol 9
    ];

    function __construct($game) {
        $this->game = $game;
    }

    public function spin() {
        return $this->game->spin("checkForWinCombosScatterAsJoker");
    }

    public function bonusSpin() {
        return $this->game->bonusSpin("Substitution");
    }

    public function areBonusSpins() {
        return $this->game->areBonusSpins();
    }

}