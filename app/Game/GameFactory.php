<?php

namespace App\Game;

use App\Game\Basic\Game;

class GameFactory {
    /**
     * Return setted up game instance
     *
     * @param string $gameName
     * @param array $settings["denomination", "lines_amount", "bet_per_line"]
     * @return instance
     */
    public static function createGame(string $gameName, array $settings) {
        $gameClass = "App\\Game\\Games\\$gameName";

        $game = new Game;
        $game->denomination = $settings["denomination"];
        $game->linesAmount = $settings["lines_amount"];
        $game->betPerLine = $settings["bet_per_line"];
        $game->cashPool = $settings["cash_pool"];

        $game->reelsAmount = $gameClass::$reelsAmount;
        $game->scatter = $gameClass::$scatter;
        $game->joker = $gameClass::$joker;
        $game->symbolsAmount = $gameClass::$symbolsAmount;
        $game->paytable = $gameClass::$paytable;
        $game->linesTypes = $gameClass::$linesTypes;
        $game->freeSpinsAmout = $gameClass::$freeSpinsAmout;

        $customGame = new $gameClass($game);
        return $customGame;
    }

}