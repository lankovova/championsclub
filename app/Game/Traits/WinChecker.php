<?php

namespace App\Game\Traits;

trait WinChecker {

    /**
     * Checks for lines win
     * Scatter substitutes for all symbols
     *
     * @return array
     */
    private function checkForWinCombosScatterAsJoker(): array {
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

    /**
     * Checks for lines win 
     * Win cash multiply for each line
     * Joker substitutes for all symbols except scatter
     *
     * @param integer $multiplier
     * @return array
     */
    private function checkForWinCombos(int $multiplier=1): array {
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
                        // 2x if joker in line
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

    /**
     * Checks for lines win
     * Line can start from any reel
     *
     * @return array
     */
    private function checkForWinCombosFromAnyPosition(): array {
        $result = [
            'won_points' => 0,
            "spin_result" => []
        ];

        foreach ($this->linesTypes as $lineIndex => $line) {
            if ($this->linesAmount === $lineIndex) {
                break;
            }

            $symbolsInLine = 0;
            $lineSymbol = -1; // first symbol in line
            $currSymbol = -1;
            $list = [];

            foreach ($line as $symMapIndex => $symMap) {
                $currSymbol = $this->finalSymbols[ $symMap[0] ][ $symMap[1] ];
                
                if ($currSymbol === $lineSymbol) {
                    $symbolsInLine++;
                    $list[] = [
                        'row' => $symMap[0],
                        'col' => $symMap[1],
                        'value' => $currSymbol
                    ];
                    // push prev symbol
                    if ($symbolsInLine === 1) {
                        $symbolsInLine++;

                        $list[] = [
                            'row' => $line[ $symMapIndex - 1 ][ 0 ],
                            'col' => $line[ $symMapIndex - 1 ][ 1 ],
                             // previous symbol
                            'value' => $this->finalSymbols[ $line[ $symMapIndex - 1 ][ 0 ] ][ $line[ $symMapIndex - 1 ][ 1 ] ]
                        ];
                    }
                }

                if ($symbolsInLine <= 2 && $currSymbol !== $lineSymbol) { // for 2 symbols no cashpay
                    // reset
                    $list = [];
                    $symbolsInLine = 0;
                    $lineSymbol = $currSymbol;
                }
                
                if ($symbolsInLine >= 3 && $currSymbol !== $lineSymbol || $symbolsInLine >= 3 && $symMapIndex === ($this->reelsAmount - 1)) {
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
                    break;
                }
            }
        }

        $spinResult = $this->checkForScatterWin($result);
        $spinResult['won'] = $spinResult['won_points'] > 0;

        return $spinResult;
    }

    /**
     * Checks for lines win
     * Joker substitutes for all symbols except scatters
     *
     * @return array
     */
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

            // found first symbol that is not joker
            foreach ($line as $symMapIndex => $symMap) {
                $currSymbol = $this->finalSymbols[ $symMap[0] ][ $symMap[1] ];

                if ($currSymbol !== $this->joker || $symMapIndex === ($this->reelsAmount - 1)) {
                    $lineSymbol = $currSymbol;
                    break;
                }
            }

            // scatter doesnt play in line
            if (in_array($lineSymbol, $this->scatter, true)) {
                break;
            }

            foreach ($line as $symMapIndex => $symMap) {
                $currSymbol = $this->finalSymbols[ $symMap[0] ][ $symMap[1] ];
                
                if ($currSymbol === $lineSymbol || $currSymbol === $this->joker) {
                    $symbolsInLine++;
                    $list[] = [
                        'row' => $symMap[0],
                        'col' => $symMap[1],
                        'value' => $currSymbol
                    ];
                }
                
                if ($currSymbol !== $lineSymbol && $currSymbol !== $this->joker || $symbolsInLine === ($this->reelsAmount - 1)) {
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

                if ($currSymbol !== $lineSymbol && $currSymbol !== $this->joker) {
                    break;
                }
            }
        }

        $this->checkForTrippleScatterWin();
        $result['won'] = $result['won_points'] > 0;

        return $result;    
    }

    /**
     * Check if there are bonus spins
     *
     * @return void
     */
    private function checkForTrippleScatterWin() {
        $scatterCount = 0;
        
        foreach ($this->finalSymbols as $row) {
            foreach ($row as $currSymbol) {
                if (in_array($currSymbol, $this->scatter, true)) {
                    $scatterCount++;
                }
            }
        }

        $this->areBonusSpins = $scatterCount > 2;
    }

    /**
     * Checks if scatter win in paytable
     * Check if there are bonus spins
     *
     * @param array $spinResult
     * @return array
     */
    private function checkForScatterWin(array $spinResult): array {
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

        // Check if there are bonus spins
        $this->areBonusSpins = $scatterCount > 2;

        if ($scatterCount > 0) {
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
     * @param integer $wonCash
     * @return boolean
     */
    private function canUserWin(int $wonCash): bool {
        $res = $this->cashPool - $wonCash;
        return $res >= 0;
    }
}
