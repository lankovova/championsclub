<?php

namespace App\Game\Games;

use App\Game\Games\Game;

class CrazyBarmenOld extends Game {
    public static $reelsAmount = 5;
    public static $scatter = 8;
    public static $joker = 12;
    public static $freeSpinsAmount = 15;
    public static $symbolsAmount = 13;
    public static $paytable = [
        [0,2,4,30,100], //PAYTABLE FOR SYMBOL 0
        [0,0,4,30,100],  //PAYTABLE FOR SYMBOL 1
        [0,0,10,50,120],  //PAYTABLE FOR SYMBOL 2
        [0,10,250,2500,9000],  //PAYTABLE FOR SYMBOL 3
        [0,2,4,20,500],    //PAYTABLE FOR SYMBOL 4
        [0,0,20,70,250],    //PAYTABLE FOR SYMBOL 5
        [0,0,4,30,100],     //PAYTABLE FOR SYMBOL 6
        [0,0,10,50,120],     //PAYTABLE FOR SYMBOL 7
        [0,0,20,70,250],     //PAYTABLE FOR SYMBOL 8
        [0,0,20,100,400],     //PAYTABLE FOR SYMBOL 9
        [0,0,4,30,100],     //PAYTABLE FOR SYMBOL 10
        [0,2,30,120,800],     //PAYTABLE FOR SYMBOL 11
        [0,2,30,120,800]     //PAYTABLE FOR SYMBOL 12
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