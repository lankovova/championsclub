<?php

namespace App\Game\Traits;

trait WinChecker {

    /**
     * Checks for combos
     * Scatter plays like joker
     *
     * @return [] $spinResult;
     */
    private function checkForWinCombosScatterAsJoker() {
        $spinResult = [
            'won_points' => 0,
            "spin_result" => []
        ];
        foreach($this->linesTypes as $lineIndex => $line) {
            if ($this->linesAmount === $lineIndex) {
                break;
            }

            $symbolsInLine = 1; // 1 because first symbol in line is counted as part of combo
            $lineSymbol; // Symbol that make line
            $currSymbol;
            $list = [];
            $isJoker = false;

            // Found first symbol that is not joker
            foreach ($line as $symMapIndex => $symMap) {
                $currSymbol = $this->finalSymbols[ $symMap[0] ][ $symMap[1] ];
                // Even if last symbol is joker
                if ($currSymbol !== $this->joker || $symMapIndex === ($this->reelsAmount - 1)) {
                    $lineSymbol = $currSymbol;
                    $list[] = [
                        'row' => $line[0][0],
                        'col' => $line[0][1],
                        'value' => $this->finalSymbols[ $line[0][0] ][ $line[0][1] ]
                    ];
                    break;
                }
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
                } elseif ($currSymbol === $lineSymbol) {
                    $symbolsInLine++;
                    $list[] = [
                        'row' => $symMap[0],
                        'col' => $symMap[1],
                        'value' => $currSymbol
                    ];
                }
                
                if ($currSymbol !== $lineSymbol && $currSymbol !== $this->joker || $symbolsInLine === $this->reelsAmount) {
                    $comboPay = $this->paytable[$lineSymbol][$symbolsInLine - 1];

                    if ($comboPay > 0) {
                        $comboPay *= $this->betPerLine;
                        $comboPay = $isJoker ? ($comboPay * 2) : $comboPay;
                        $spinResult['won_points'] += $comboPay;

                        $spinResult['spin_result'][] = [
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

        $spinResult = $this->checkForScatterWin($spinResult);
        $spinResult['won'] = $spinResult['won_points'] > 0 ? true : false;
        $spinResult['won_coins'] = $spinResult['won_points'] * $this->denomination;
        return $spinResult;
    }

    private function checkForWinCombos($multiplier=1) {
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
                // Scatter has its own checker
                if (($currSymbol !== $this->joker) || $symMapIndex === ($this->reelsAmount - 1)) {
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

            foreach ($line as $symMapIndex => $symMap) {
                // Skipping first symbol as it is known
                if ($symMapIndex === 0) {
                    if ($this->finalSymbols[ $line[0][0] ][ $line[0][1] ] === $this->joker) {
                        $isJoker = true;
                    }
                    continue;
                }
                
                $currSymbol = $this->finalSymbols[ $symMap[0] ][ $symMap[1] ];

                if ($currSymbol === $this->scatter) {
                    break;
                }
                
                if ($currSymbol === $this->joker ) {
                    $symbolsInLine++;
                    $isJoker = true;
                    $list[] = [
                        'row' => $symMap[0],
                        'col' => $symMap[1],
                        'value' => $this->joker
                    ];
                } elseif ($currSymbol === $lineSymbol) {
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
                        $comboPay *= $multiplier;
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

    private function checkForScatterWin ($spinResult) {
        $scatterCount = 0;
        $list = [];
        $comboPay = 0;
        
        foreach ($this->finalSymbols as $rowIndex => $row) {
            foreach ($row as $symbolIndex => $symbol) {
                if ($symbol === $this->scatter) {
                    $scatterCount++;

                    $list[] = [
                        'row' => $rowIndex,
                        'col' => $symbolIndex,
                        'value' => $this->scatter
                    ];
                }
            }
        }

        $spinResult['scatter_count'] = $scatterCount;

        if ( $scatterCount > 0) {
            $comboPay = $this->paytable[ $this->scatter ][ $scatterCount-1 ];
        }

        if ($comboPay > 0) {
            $comboPay *= $this->bet();
            $spinResult['won_points'] += $comboPay;
            $spinResult['spin_result'][] = [
                'line_symbol' => $this->scatter,
                'list' => $list,
                'points' => $comboPay
            ];
        }

        return $spinResult;
    }

    /**
     * Return true if user can win and
     * return false if can`t
     *
     * @return bool
     */
    private function canUserWin($wonCash) {
        $res = $this->cashPool - $wonCash;
        return $res >= 0;
    }
}
