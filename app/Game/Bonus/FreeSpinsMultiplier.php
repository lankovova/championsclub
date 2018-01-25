<?php

namespace App\Game\Bonus;

use App\Game\Traits\WinChecker;
use App\Game\Traits\Helper;
use App\Game\Bonus\FreeSpins;

class FreeSpinsMultiplier extends FreeSpins {

    private $multiplier = 3;

    private function checkForWinCombos() {
        $result = [
            'won_points' => 0,
            "spin_result" => []
        ];
        foreach($this->linesTypes as $lineIndex => $line) {
            if ($this->linesAmount === $lineIndex) {
                break;
            }

            $symbolsInLine = 1; // 1 because first symbol in line is counted as part of combo
            $lineSymbol; // First symbol in line
            $currSymbol;
            $list = [];
            $isJoker = false;

            // Found first symbol that is not joker
            foreach ($line as $symMapIndex => $symMap) {
                $currSymbol = $this->finalSymbols[ $symMap[0] ][ $symMap[1] ];
                // Symbol can`t be scatter
                if (($currSymbol !== $this->joker && $currSymbol !== $this->scatter) || 
                    $symMapIndex === ($this->reelsAmount - 1)) {
                    // Default symbol
                    $lineSymbol = $currSymbol;
                    // The first symbol in line even if joker
                    $list[] = [
                        'row' => $line[0][0],
                        'col' => $line[0][1],
                        'value' => $this->finalSymbols[ $line[0][0] ][ $line[0][1] ]
                    ];
                    break;
                }
            }

            // Scatter has its own checker
            if ($currSymbol === $this->scatter) {
                break;
            }

            foreach ($line as $symMapIndex => $symMap) {

                // Skipping first symbol as it is known
                if ($symMapIndex === 0) {
                    if ($this->finalSymbols[ $line[0][0] ][ $line[0][1] ] === $this->joker) {
                        $isJoker = true;
                    }
                    continue;
                }
                
                $currSymbol = $this->finalSymbols[ $symMap[0] ][ $symMap[1] ];
                
                if ($currSymbol === $this->joker ) {
                    $symbolsInLine++;
                    $isJoker = true;
                    $list[] = [
                        'row' => $symMap[0],
                        'col' => $symMap[1],
                        'value' => $this->joker
                    ];
                } elseif ($currSymbol == $lineSymbol) {
                    $symbolsInLine++;
                    $list[] = [
                        'row' => $symMap[0],
                        'col' => $symMap[1],
                        'value' => $currSymbol
                    ];
                }
                
                if ($currSymbol !== $lineSymbol && $currSymbol !== $this->joker || $symbolsInLine === $this->reelsAmount) {
                    $comboPay = $this->paytable[ $lineSymbol ][ $symbolsInLine - 1 ];

                    if ($comboPay > 0) {
                        $comboPay *= $this->betPerLine;
                        $comboPay = $isJoker ? ($comboPay * 2) : $comboPay;

                        $comboPay *= $this->multiplier;

                        $result['won_points'] += $comboPay;

                        $result['spin_result'][] = [
                            'line_index' => $lineIndex,
                            'line_symbol' => $lineSymbol,
                            'list' => $list,
                            'points' => $comboPay
                        ];
                    }
                }

                if ($currSymbol !== $lineSymbol && $currSymbol !== $this->joker) {
                    break;
                }
            }
        }

        $spinResult = $this->checkForScatterWin($result);
        $spinResult['won'] = $spinResult['won_points'] > 0;

        return $spinResult;
    }
}