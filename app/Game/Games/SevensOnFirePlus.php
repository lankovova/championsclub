<?php

namespace App\Game\Games;

use App\Game\Games\Game;

class SevensOnFirePlus extends Game {
    public static $reelsAmount = 5;
    public static $scatter = 1;
    public static $joker = 1;
    public static $freeSpinsAmout = 10;
    public static $symbolsAmount = 8;
    public static $paytable = [
        [ 0, 2, 5, 20, 100 ], //PAYTABLE FOR SYMBOL 1
        [ 0, 0, 20, 100, 200 ],  //PAYTABLE FOR SYMBOL 2
        [ 0, 0, 5, 20, 100 ],  //PAYTABLE FOR SYMBOL 3
        [ 0, 0, 10, 50, 100 ],  //PAYTABLE FOR SYMBOL 4
        [ 0, 0, 10, 50, 100 ],    //PAYTABLE FOR SYMBOL 5
        [ 0, 0, 10, 100, 500 ],    //PAYTABLE FOR SYMBOL 6
        [ 0, 0, 10, 50, 100 ],     //PAYTABLE FOR SYMBOL 7
        [ 0, 0, 20, 100, 200 ]     //PAYTABLE FOR SYMBOL 8
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