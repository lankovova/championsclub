<?php

namespace App\Game\Games;

use App\Game\Games\Game;

class HitJewels extends Game {
    public static $reelsAmount = 5;
    public static $scatter = 2;
    public static $joker = -1;
    public static $freeSpinsAmount = 0;
    public static $symbolsAmount = 8;
    public static $paytable = [
        [0,0,30,150,500], //PAYTABLE FOR SYMBOL 0
        [0,0,10,25,150],  //PAYTABLE FOR SYMBOL 1
        [0,0,2,10,50],  //PAYTABLE FOR SYMBOL 2 (Scatter)
        [0,0,50,500,5000],  //PAYTABLE FOR SYMBOL 3
        [0,0,15,50,200],    //PAYTABLE FOR SYMBOL 4
        [0,0,15,50,200],    //PAYTABLE FOR SYMBOL 5
        [0,0,10,25,150],     //PAYTABLE FOR SYMBOL 6
        [0,0,30,150,500]    //PAYTABLE FOR SYMBOL 7
    ];

    function __construct($game) {
        $this->game = $game;
    }

    public function spin() {
        return $this->game->spin("checkForWinCombosFromAnyPosition");
    }

    public function bonusSpin() {

    }

    public function areBonusSpins() {
        // no bonus spin
        return false;
    }

}
