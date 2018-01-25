<?php
namespace App\Game\Basic;

use App\Game\Traits\WinChecker;
use App\Game\Traits\Helper;

class Game {
    use WinChecker, Helper;

    public $reelsAmount;
    public $scatter;
    public $joker;
    public $finalSymbols;
    public $randomSymbols;
    public $symbolsAmount;
    public $paytable;
    public $linesTypes;
    public $freeSpinsAmount;

    public $wonCash;
    public $cashPool;

    public $linesAmount;
    public $betPerLine;
    public $denomination;

    public $spinResult;
    public $areBonusSpins;

    /**
     * Return spin result accoding to $checkType.
     *
     * @param string $checkType
     * @return array
     */
    public function spin(string $checkType) {
        do {
            $this->generateFinalSymbols();
            $result = $this->$checkType();
        } while (!$this->canUserWin($result["won_points"] * $this->denomination));

        $this->areBonusSpins = $result["scatter_count"] > 2;

        $result["won_coins"] = $result["won_points"] * $this->denomination;
        $result["final_symbols"] = $this->finalSymbols;
        $this->result = $result;

        return $result;
    }
    /**
     * Return bonus spin result accoding to $bonusType.
     *
     * @param string $bonusType
     * @return array
     */
    public function bonusSpin(string $bonusType) {
        $bonusClass = "App\\Game\\Bonus\\$bonusType";
        $freeSpinsObj = new $bonusClass([
            "symbolsAmount" => $this->symbolsAmount,
            "scatter" => $this->scatter,
            "joker" => $this->joker,
            "spinsAmount" => $this->freeSpinsAmount,
            "cashPool" => $this->cashPool - ($this->result["won_points"] * $this->denomination),
            "reelsAmount" => $this->reelsAmount,
            "linesTypes" => $this->linesTypes,
            "linesAmount" => $this->linesAmount,
            "paytable" => $this->paytable,
            "betPerLine" => $this->betPerLine,
            "denomination" => $this->denomination
        ]);

        return $freeSpinsObj->getResult();
    }

    /**
     * Return true if player won bonus game.
     * Return false if doesn`t.
     *
     * @return bool
     */
    public function areBonusSpins() {
        return $this->areBonusSpins;
    }

}