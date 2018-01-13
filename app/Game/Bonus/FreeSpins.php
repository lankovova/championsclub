<?php

namespace App\Game\Bonus;

use App\Game\Traits\WinChecker;
use App\Game\Traits\Helper;

class FreeSpins {
    use WinChecker, Helper;

    protected $randomSymbols;
    protected $finalSymbols;
    protected $spinResult;
    protected $wonPoints;

    protected $symbolsAmount;
    protected $scatter;
    protected $spinsAmout;
    protected $reelsAmount;
    protected $linesTypes;
    protected $joker;
    protected $linesAmount;
    protected $paytable;
    protected $cashPool;

    function __construct($settings) {
        $this->symbolsAmount = $settings["symbolsAmount"];
        $this->scatter = $settings["scatter"];
        $this->spinsAmout = $settings["spinsAmout"];
        $this->cashPool = $settings["cashPool"];
        $this->reelsAmount = $settings["reelsAmount"];
        $this->linesTypes = $settings["linesTypes"];
        $this->linesAmount = $settings["linesAmount"];
        $this->paytable = $settings["paytable"];
        $this->betPerLine = $settings["betPerLine"];
        $this->denomination = $settings["denomination"];
        $this->joker = $this->scatter;

        while ($this->spinsAmout > 0) {
            $this->spin();
            $this->spinsAmout--;
        }
        $this->spinResult["type"] = "free_spins";
        $this->spinResult["won_points"] = $this->wonPoints;
        $this->spinResult["won_coins"] = $this->wonPoints * $this->denomination;
    }

    protected function spin() {
        $report;
        do {
            $this->generateFinalSymbols();
            $result = $this->checkForWinCombos();
        } while (!$this->canUserWin($result["won_points"] * $this->denomination));

        $report["spin_result"] = $result["spin_result"];
        $report["final_symbols"] = $this->finalSymbols;
        $report["won"] = $result["won"];
        
        $this->spinResult["spins"][] = $report;
        $this->cashPool -= ($result["won_points"] * $this->denomination);
        $this->wonPoints += ($result["won_points"]);
    }

    public function getResult() {
        return $this->spinResult;
    }
}