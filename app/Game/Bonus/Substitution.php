<?php

namespace App\Game\Bonus;

use App\Game\Traits\WinChecker;
use App\Game\Traits\Helper;

class Substitution {
    use WinChecker, Helper;

    protected $substitutionSymbol;
    protected $wonPoints;
    protected $substitutionFinalSymbols;
    protected $randomSymbols;
    protected $substitutionResult;

    protected $symbolsAmount;
    protected $scatter;
    protected $finalSymbols;
    protected $spinsAmount;
    protected $reelsAmount;
    protected $linesTypes;
    protected $joker;
    protected $linesAmount;
    protected $paytable;
    protected $cashPool;

    function __construct($settings) {
        $this->symbolsAmount = $settings["symbolsAmount"];
        $this->scatter = $settings["scatter"];
        $this->spinsAmount = $settings["spinsAmount"];
        $this->cashPool = $settings["cashPool"];
        $this->reelsAmount = $settings["reelsAmount"];
        $this->linesTypes = $settings["linesTypes"];
        $this->linesAmount = $settings["linesAmount"];
        $this->paytable = $settings["paytable"];
        $this->betPerLine = $settings["betPerLine"];
        $this->denomination = $settings["denomination"];
        $this->joker = $this->scatter;

        $this->spin();
        $this->substitutionResult["won_coins"] = $this->wonPoints * $this->denomination;
        $this->substitutionResult["won_points"] = $this->wonPoints;
        $this->substitutionResult["type"] = "substitution";
        $this->substitutionResult["substitution_symbol"] = $this->substitutionSymbol;
    }

    protected function spin() {
        $spinsAmount = $this->spinsAmount;
        $this->wonPoints = 0;
        $this->spinResult = [];
        $this->generateSubstitutionSymbol();

        while ($spinsAmount > 0) {
            $report = [];
            do {
                $this->generateFinalSymbols();
                $result = $this->checkForWinCombosScatterAsJoker();

                $this->generateSubstitutionFinalSymbols();
                $sResult = $this->checkForSubstitutionWin();
            } while (!$this->canUserWin(
                ($result["won_points"] + $sResult["won_points"]) * $this->denomination
            ));

            $this->cashPool -= (($result["won_points"] + $sResult["won_points"]) * $this->denomination);
            $this->wonPoints += ($result["won_points"] + $sResult["won_points"]);

            $report["spin_result"] = $result["spin_result"];
            $report["final_symbols"] = $this->finalSymbols;
            $report["won"] = $result["won"];

            $report["substitution"]["spin_result"] = $sResult["spin_result"];
            $report["substitution"]["won"] = $sResult["won"];
            $report["substitution"]["final_symbols"] = $this->substitutionFinalSymbols;

            $this->substitutionResult['spins'][] = $report;

            $spinsAmount--;
        }
    }

    /**
     * Check for substitution wins
     *
     * @return array
     */
    protected function checkForSubstitutionWin(): array {
        $result = [
            "won_points" => 0,
            "spin_result" => []
        ];

        foreach ($this->linesTypes as $lineIndex => $line) {
            if ($this->linesAmount <= $lineIndex) {
                break;
            }

            $symbolsInLine = 0;
            $list = [];

            foreach ($line as $symMap_i => $symMap) {

                $curr_symbol = $this->substitutionFinalSymbols[ $symMap[0] ][ $symMap[1] ];

                if ($curr_symbol == $this->substitutionSymbol) {
                    $symbolsInLine++;
                    $list[] = [
                        "row" => $symMap[0],
                        "col" => $symMap[1],
                        "value" => $this->substitutionSymbol
                    ];
                }

                if ($symMap_i === ($this->reelsAmount - 1) && $symbolsInLine > 0) {
                    $comboPay = $this->paytable[ $this->substitutionSymbol ][ $symbolsInLine - 1 ];

                    if ($comboPay > 0) {
                        $comboPay *= $this->betPerLine;

                        $result["won_points"] += $comboPay;
                        
                        $result["spin_result"][] = [
                            "line_index" => $lineIndex,
                            "symbols_in_line" => $symbolsInLine,
                            "list" => $list,
                            "points" => $comboPay,
                        ];
                    }
                }
            }
        }

        $result["won"] = $result["won_points"] > 0;

        return $result;
    }

    /**
     * Generate symbol that will be substituted.
     * Can`t be scatter.
     *
     * @return void
     */
    protected function generateSubstitutionSymbol() {
        $this->substitutionSymbol = rand(0, $this->symbolsAmount - 1);

        if ($this->substitutionSymbol === $this->scatter) {
            $this->generateSubstitutionSymbol();
        }
    }

    /**
     * Generates substitution final symbols.
     *
     * @return void
     */
    protected function generateSubstitutionFinalSymbols() {
        $this->substitutionFinalSymbols = $this->finalSymbols;

        foreach ($this->substitutionFinalSymbols as $rowIndex => $row) {
            foreach ($row as $symbolIndex => $symbol) {
                if ($symbol === $this->substitutionSymbol) {
                    $this->substitutionFinalSymbols[0][$symbolIndex] = $symbol;
                    $this->substitutionFinalSymbols[1][$symbolIndex] = $symbol;
                    $this->substitutionFinalSymbols[2][$symbolIndex] = $symbol;
                }
            }
        }
    }

    /**
     * Fill randomSymbols with random numbers
     * that represent symbols.
     * Skips scatter.
     *
     * @return void
     */
    protected function fillSymbols() {
        $this->randomSymbols = [];

        for($i = 0; $i < $this->symbolsAmount; $i++) {
            for ($j = 0; $j < 10; $j++) {
                if (($i) === $this->scatter) {
                    continue;
                }
                $this->randomSymbols[] = $i;
            }
        }
    }

    /**
     * Return substitution result.
     *
     * @return array $substitutionResult
     */
    public function getResult() {
        return $this->substitutionResult;
    }
}