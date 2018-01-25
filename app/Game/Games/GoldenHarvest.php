<?php

namespace App\Game\Games;

use App\Game\Games\Game;

class GoldenHarvest extends Game {
    public static $reelsAmount = 5;
    public static $scatter = 10;
    public static $joker = 8;
    public static $freeSpinsAmount = 45;
    public static $symbolsAmount = 13;
    public static $paytable = [
        [0,2,4,30,100],
		[0,0,4,30,100],
		[0,0,10,50,120],
		[0,2,30,120,800],
		[0,0,20,100,400],
		[0,0,20,70,250],
		[0,2,30,120,800],
		[0,0,4,30,100],
		[0,10,250,2500,9000], //8
		[0,0,10,50,120],
		[0,2,4,20,500],
		[0,0,4,30,100],
		[0,0,20,70,250]
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
