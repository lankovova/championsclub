<?php

namespace App\Game\Bonus;

use App\Game\Traits\WinChecker;
use App\Game\Traits\Helper;

class FreeSpinsTrippleScatter {

    use WinChecker, Helper;

    protected $wonPoints;
    protected $randomSymbols;

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
        $this->joker = $settings["joker"];
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

    protected function spin() {
        $report;
        do {
            $this->generateFinalSymbolsTrippleScatter();
            $result = $this->checkForWinCombosTrippleScatter();
        } while (!$this->canUserWin($result["won_points"] * $this->denomination));

        if ($this->areBonusSpins) {
            $this->leftToSpin +=  $this->spinsAmount;
        }

        $report["spin_result"] = $result["spin_result"];
        $report["final_symbols"] = $this->finalSymbols;
        $report["won"] = $result["won"];
        
        $this->spinResult["spins"][] = $report;
        $this->cashPool -= ($result["won_points"] * $this->denomination);
        $this->wonPoints += ($result["won_points"]);
    }

    private function checkForWinCombosTrippleScatter(): array {
        $result = [
            'won_points' => 0,
            "spin_result" => []
        ];
        foreach ($this->linesTypes as $lineIndex => $line) {
            if ($this->linesAmount === $lineIndex) {
                break;
            }

            $symbolsInLine = 0;
            $lineSymbol;
            $currSymbol;
            $list = [];
            $isJoker = false;

            // find flineSymbol
            foreach ($line as $symMapIndex => $symMap) {
                $currSymbol = $this->finalSymbols[ $symMap[0] ][ $symMap[1] ];

                if ($currSymbol !== $this->joker && !in_array($currSymbol, $this->scatter, true) || 
                    $symMapIndex === ($this->reelsAmount - 1)) {
                    $lineSymbol = $currSymbol;
                    break;
                }
            }

            foreach ($line as $symMapIndex => $symMap) {
                $currSymbol = $this->finalSymbols[ $symMap[0] ][ $symMap[1] ];
                
                if ($currSymbol === $lineSymbol || 
                    $currSymbol === $this->joker || 
                    in_array($currSymbol, $this->scatter, true)
                ) {
                    $symbolsInLine++;
                    $list[] = [
                        'row' => $symMap[0],
                        'col' => $symMap[1],
                        'value' => $currSymbol
                    ];
                }
                
                if ($currSymbol !== $lineSymbol && $currSymbol !== $this->joker &&
                    !in_array($currSymbol, $this->scatter, true) || 
                    $symbolsInLine === ($this->reelsAmount - 1)
                ) {
                    $comboPay = $this->paytable[ $lineSymbol ][ $symbolsInLine - 1 ];

                    if ($comboPay > 0) {
                        $comboPay *= $this->betPerLine;

                        $result['won_points'] += $comboPay;
                        $result['spin_result'][] = [
                            'line_index' => $lineIndex,
                            'line_symbol' => $lineSymbol,
                            'list' => $list,
                            'points' => $comboPay
                        ];
                    }
                }

                if ($currSymbol !== $lineSymbol && $currSymbol !== $this->joker && 
                    !in_array($currSymbol, $this->scatter, true)
                ) {
                    break;
                }
            }
        }

        $this->checkForTrippleScatterWin();
        $result['won'] = $result['won_points'] > 0;

        return $result;   
    }

    public function getResult(): array {
        return $this->spinResult;
    }

}