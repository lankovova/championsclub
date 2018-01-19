<?php

namespace App\Game\Games;

use App\Game\Games\Game;

class FireRagePlus extends Game {
    public static $reelsAmount = 5;
    public static $scatter = 5;
    public static $joker = 4;
    public static $freeSpinsAmout = 45;
    public static $symbolsAmount = 13;
    public static $paytable = [
        [0,2,4,30,100], //PAYTABLE FOR SYMBOL 1
        [0,0,4,30,100],  //PAYTABLE FOR SYMBOL 2
        [0,0,10,50,120],  //PAYTABLE FOR SYMBOL 3
        [0,10,250,2500,9000],  //PAYTABLE FOR SYMBOL 4
        [0,2,4,20,500],    //PAYTABLE FOR SYMBOL 5
        [0,0,20,70,250],    //PAYTABLE FOR SYMBOL 6
        [0,0,4,30,100],     //PAYTABLE FOR SYMBOL 7
        [0,0,10,50,120],     //PAYTABLE FOR SYMBOL 8
        [0,0,20,70,250],     //PAYTABLE FOR SYMBOL 9
        [0,0,20,100,400],     //PAYTABLE FOR SYMBOL 10
        [0,0,4,30,100],     //PAYTABLE FOR SYMBOL 11
        [0,2,30,120,800],     //PAYTABLE FOR SYMBOL 12
        [0,2,30,120,800]     //PAYTABLE FOR SYMBOL 13
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