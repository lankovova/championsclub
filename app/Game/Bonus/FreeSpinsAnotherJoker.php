<?php

namespace App\Game\Bonus;

use App\Game\Traits\WinChecker;
use App\Game\Traits\Helper;
use App\Game\Bonus\FreeSpins;

class FreeSpinsAnotherJoker extends FreeSpins {

    function __construct($settings, $params) {
        $this->symbolsAmount = $settings["symbolsAmount"];
        $this->scatter = $settings["scatter"];
        $this->joker = $params["bonusSpinJoker"];
        $this->spinsAmount = $settings["spinsAmount"];
        $this->cashPool = $settings["cashPool"];
        $this->reelsAmount = $settings["reelsAmount"];
        $this->linesTypes = $settings["linesTypes"];
        $this->linesAmount = $settings["linesAmount"];
        $this->paytable = $settings["paytable"];
        $this->betPerLine = $settings["betPerLine"];
        $this->denomination = $settings["denomination"];

        $this->leftToSpin = $this->spinsAmount;

        $spined = 0;
        while ($this->leftToSpin > 0) {
            $this->spin();
            $this->leftToSpin--;
            $spined++;
        }
        $this->spinResult["spined"] = $spined;
        $this->spinResult["type"] = "free_spins";
        $this->spinResult["won_points"] = $this->wonPoints;
        $this->spinResult["won_coins"] = $this->wonPoints * $this->denomination;
    }

}