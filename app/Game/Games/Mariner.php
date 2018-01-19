<?php

namespace App\Game\Games;

use App\Game\Games\Game;

class FireRagePlus extends Game {
    public static $reelsAmount = 5;
    public static $scatter = [3,4,5];
    public static $joker = 6;
    public static $freeSpinsAmout = 10;
    public static $symbolsAmount = 12;
    public static $paytable = [
        [0,0,5,20,100], //PAYTABLE FOR SYMBOL 1
        [0,0,10,40,150],  //PAYTABLE FOR SYMBOL 2
        [0,0,0,0,0],  //PAYTABLE FOR SYMBOL 3
        [0,0,0,0,0],  //PAYTABLE FOR SYMBOL 4
        [0,0,0,0,0],    //PAYTABLE FOR SYMBOL 5
        [0,10,100,1000,5000],    //PAYTABLE FOR SYMBOL 6
        [0,0,5,20,100],     //PAYTABLE FOR SYMBOL 7
        [0,0,10,40,150],     //PAYTABLE FOR SYMBOL 8
        [0,5,25,100,500],     //PAYTABLE FOR SYMBOL 9
        [0,5,50,200,1000],     //PAYTABLE FOR SYMBOL 10
        [0,0,10,40,150],     //PAYTABLE FOR SYMBOL 11
        [0,5,15,75,250]    //PAYTABLE FOR SYMBOL 12
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