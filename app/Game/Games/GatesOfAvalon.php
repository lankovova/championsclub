<?php

namespace App\Game\Games;

use App\Game\Games\Game;

class GatesOfAvalon extends Game {
    public static $reelsAmount = 5;
    public static $scatter = 10;
    public static $joker = -1;
    public static $bonusSpinJoker = 4;
    public static $freeSpinsAmount = 15;
    public static $symbolsAmount = 12;
    public static $paytable = [
        [0,0,5,20,100],         // Symbol 0
        [0,0,10,50,100],         // Symbol 1
        [0,0,20,100,600],         // Symbol 2
        [0,10,300,3000,10000],       // Symbol 3
        [0,5,50,300,1000],         // Symbol 4
        [0,0,25,200,800],         // Symbol 5
        [0,0,15,75,400],   // Symbol 6
        [0,0,5,20,100],         // Symbol 7
        [0,0,10,50,100],      // Symbol 8
        [0,0,15,75,400],       // Symbol 9
        [0,2,5,20,500], //10
        [0,0,10,50,100] //11
    ];

    function __construct($game) {
        $this->game = $game;
    }

    public function spin() {
        return $this->game->spin("checkForWinCombos");
    }

    public function bonusSpin() {
        return $this->game->bonusSpin("FreeSpinsAnotherJoker", ["bonusSpinJoker" => self::$bonusSpinJoker]);
    }

    public function areBonusSpins() {
        return $this->game->areBonusSpins();
    }

}