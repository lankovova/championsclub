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
     * @param string $generateFinalSymbolsType
     * @return array
     */
    public function spin(string $checkType, string $generateFinalSymbolsType="generateFinalSymbols"): array {
        do {
            $this->$generateFinalSymbolsType();
            $result = $this->$checkType();
        } while (!$this->canUserWin($result["won_points"] * $this->denomination));

        $result["won_coins"] = $result["won_points"] * $this->denomination;
        $result["final_symbols"] = $this->finalSymbols;
        $this->result = $result;

        return $result;
    }

    /**
     * Return bonus spin result accoding to $bonusType.
     *
     * @param string $bonusType
     * @param array $params will be passed to bonus instance
     * @return array
     */
    public function bonusSpin(string $bonusType, array $params=[]): array {
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
        ], $params);

        return $freeSpinsObj->getResult();
    }

    /**
     * Return true if player won bonus game.
     * Return false if doesn`t.
     *
     * @return boolean
     */
    public function areBonusSpins(): bool {
        return $this->areBonusSpins;
    }

}