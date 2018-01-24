<?php

namespace App\Game\Games;

use App\Game\Games\Game;

class MagicSecret extends Game {
    public static $reelsAmount = 5;
    public static $scatter = 10;
    public static $joker = 10;
    public static $freeSpinsAmount = 10;
    public static $symbolsAmount = 10;
    public static $paytable = [
         [0,0,5,25,100], //PAYTABLE FOR SYMBOL 1
        [0,0,5,40,150],  //PAYTABLE FOR SYMBOL 2
        [0,5,30,100,750],  //PAYTABLE FOR SYMBOL 3
        [0,5,40,400,2000],  //PAYTABLE FOR SYMBOL 4
        [0,0,5,25,100],    //PAYTABLE FOR SYMBOL 5
        [0,0,5,40,150],    //PAYTABLE FOR SYMBOL 6
        [0,10,100,1000,5000],     //PAYTABLE FOR SYMBOL 7
        [0,0,5,25,100],     //PAYTABLE FOR SYMBOL 8
        [0,5,30,100,750],     //PAYTABLE FOR SYMBOL 9
        [0,0,3,30,300]     //PAYTABLE FOR SYMBOL 10
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
