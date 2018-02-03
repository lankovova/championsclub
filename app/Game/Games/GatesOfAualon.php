<?php

namespace App\Game\Games;

use App\Game\Games\Game;

class CrazyBarmenOld extends Game {
    public static $reelsAmount = 5;
    public static $scatter = 11;
    public static $joker = 4;
	public static $freeSpinsJocker = 5;
    public static $freeSpinsAmount = 15;
    public static $symbolsAmount = 12;
    public static $paytable = [
        [0,0,5,20,100], //PAYTABLE FOR SYMBOL 1
        [0,0,10,50,100],  //PAYTABLE FOR SYMBOL 2
        [0,0,20,100,600],  //PAYTABLE FOR SYMBOL 3
        [0,10,300,3000,10000],  //PAYTABLE FOR SYMBOL 4
        [0,5,50,300,1000],    //PAYTABLE FOR SYMBOL 5
        [0,0,25,200,800],    //PAYTABLE FOR SYMBOL 6
        [0,0,15,75,400],     //PAYTABLE FOR SYMBOL 7
        [0,0,5,20,100],     //PAYTABLE FOR SYMBOL 8
        [0,0,10,50,100],     //PAYTABLE FOR SYMBOL 9
        [0,0,15,75,400],     //PAYTABLE FOR SYMBOL 10
        [0,2,5,20,500],     //PAYTABLE FOR SYMBOL 11
        [0,0,10,50,100]     //PAYTABLE FOR SYMBOL 12
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