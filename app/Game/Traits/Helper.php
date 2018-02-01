<?php

namespace App\Game\Traits;

trait Helper {

    /**
     * Return number number from randomSymbols
     *
     * @return integer
     */
    protected function generateRandomSymbol(): int {
        $key = array_rand($this->randomSymbols, 1);
        return $this->randomSymbols[$key];
    }

    /**
     * Return bet amount without denomination
     *
     * @return integer
     */
    protected function bet(): int {
        return $this->linesAmount * $this->betPerLine;
    }

    /**
     * Return bet amount with denomination
     *
     * @return integer
     */
    protected function coinBet(): int {
        return $this->bet() * $this->denomination;
    }

    /**
     * Fill finalSymbols with random numbers
     * from randomSymbols
     *
     * @return void
     */
    protected function generateFinalSymbols() {
        $this->fillSymbols();
        $this->finalSymbols = [];
        // no same symbols in one row
        // 3 row of symbols
        for ($row = 0; $row < 3; $row++) {
            for ($reel = 0; $reel < $this->reelsAmount; $reel++) {
                $symbol = $this->generateRandomSymbol();
                switch ($row) {
                    case 0:
                        $this->finalSymbols[$row][$reel] = $symbol;  
                    break;
                    case 1:
                        do {
                            $symbol = $this->generateRandomSymbol();
                        } while ($this->finalSymbols[0][$reel] === $symbol);

                        $this->finalSymbols[$row][$reel] = $symbol;
                    break;
                    case 2:
                        do {
                            $symbol = $this->generateRandomSymbol();
                        } while ($this->finalSymbols[0][$reel] === $symbol || $this->finalSymbols[1][$reel] === $symbol);

                        $this->finalSymbols[$row][$reel] = $symbol;
                    break;
                    default:
                    break;
                }
            }
        }   
          
    }

    /**
     * Fill finalSymbols with random numbers
     * from randomSymbols
     *
     * @return void
     */
    protected function generateFinalSymbolsTrippleScatter() {
        $this->fillSymbolsTrippleScatter();
        $this->finalSymbols = [];

        for ($row = 0; $row < 3; $row++) {
            for ($reel = 0; $reel < $this->reelsAmount; $reel++) {
                $symbol = $this->generateRandomSymbol();

                switch ($row) {
                    case 0:
                        switch ($reel) {
                            case 0:
                                do {
                                    $symbol = $this->generateRandomSymbol();
                                } while ($this->scatter[1] === $symbol ||
                                        $this->scatter[2] === $symbol );
                            break;
                            case 2:
                                do {
                                    $symbol = $this->generateRandomSymbol();
                                } while ($this->scatter[0] === $symbol ||
                                        $this->scatter[2] === $symbol );
                            break;
                            case 4:
                                do {
                                    $symbol = $this->generateRandomSymbol();
                                } while ($this->scatter[0] === $symbol ||
                                        $this->scatter[1] === $symbol );
                            break;
                            default:
                                do {
                                    $symbol = $this->generateRandomSymbol();
                                } while ($this->scatter[0] === $symbol ||
                                        $this->scatter[1] === $symbol ||
                                        $this->scatter[2] === $symbol );
                            break;
                        }
                        $this->finalSymbols[$row][$reel] = $symbol;
                    break;
                    case 1:
                        switch ($reel) {
                            case 0:
                                do {
                                    $symbol = $this->generateRandomSymbol();
                                } while ($this->finalSymbols[0][$reel] === $symbol ||
                                        $this->scatter[1] === $symbol ||
                                        $this->scatter[2] === $symbol );
                            break;
                            case 2:
                                do {
                                    $symbol = $this->generateRandomSymbol();
                                } while ($this->finalSymbols[0][$reel] === $symbol ||
                                        $this->scatter[0] === $symbol ||
                                        $this->scatter[2] === $symbol );
                            break;
                            case 4:
                                do {
                                    $symbol = $this->generateRandomSymbol();
                                } while ($this->finalSymbols[0][$reel] === $symbol ||
                                        $this->scatter[0] === $symbol ||
                                        $this->scatter[1] === $symbol );
                            break;
                            default:
                                do {
                                    $symbol = $this->generateRandomSymbol();
                                } while ($this->finalSymbols[0][$reel] === $symbol ||
                                        $this->scatter[0] === $symbol ||
                                        $this->scatter[1] === $symbol ||
                                        $this->scatter[2] === $symbol );
                            break;
                        }
                        $this->finalSymbols[$row][$reel] = $symbol;
                    break;
                    case 2:
                        switch($reel) {
                            case 0:
                                do {
                                    $symbol = $this->generateRandomSymbol();
                                } while ($this->finalSymbols[0][$reel] === $symbol ||
                                        $this->finalSymbols[1][$reel] === $symbol ||
                                        $this->scatter[1] === $symbol ||
                                        $this->scatter[2] === $symbol );
                            break;
                            case 2:
                                do {
                                    $symbol = $this->generateRandomSymbol();
                                } while ($this->finalSymbols[0][$reel] === $symbol ||
                                        $this->finalSymbols[1][$reel] === $symbol ||
                                        $this->scatter[0] === $symbol ||
                                        $this->scatter[2] === $symbol );
                            break;
                            case 4:
                                do {
                                    $symbol = $this->generateRandomSymbol();
                                } while ($this->finalSymbols[0][$reel] === $symbol ||
                                        $this->finalSymbols[1][$reel] === $symbol ||
                                        $this->scatter[0] === $symbol ||
                                        $this->scatter[1] === $symbol );
                            break;
                            default:
                                do {
                                    $symbol = $this->generateRandomSymbol();
                                } while ($this->finalSymbols[0][$reel] === $symbol ||
                                        $this->finalSymbols[1][$reel] === $symbol ||
                                        $this->scatter[0] === $symbol ||
                                        $this->scatter[1] === $symbol ||
                                        $this->scatter[2] === $symbol );
                            break;
                        }
                        $this->finalSymbols[$row][$reel] = $symbol;
                    break;
                }
            }
        }  
    }

    /**
     * Fill randomSymbols with random numbers
     * that represent symbols
     *
     * @return void
     */
    protected function fillSymbols() {
        $this->randomSymbols = [];

        for ($i = 0; $i < $this->symbolsAmount; $i++) {
            for($j = 0; $j < 10; $j++) {
                if ($i !== $this->scatter) {
                    $this->randomSymbols[] = $i;
                }
            }
        }

        for($i = 0; $i < 5; $i++) {
            $this->randomSymbols[] = $this->scatter;
        }
    }

    /**
     * Fill randomSymbols with random numbers
     * that represent symbols
     *
     * @return void
     */
    protected function fillSymbolsTrippleScatter() {
        $this->randomSymbols = [];

        for($i = 0; $i < $this->symbolsAmount; $i++) {
            for ($j = 0; $j < 5; $j++) {
                switch (true) {
                    case $i === $this->scatter[0]:
                    case $i === $this->scatter[1]:
                    case $i === $this->scatter[2]:
                        continue;
                    break;
                }

                $this->randomSymbols[] = $i;
            }
        }

        foreach ($this->scatter as $scatter) {
            for($i = 0; $i < 5; $i++) {
                $this->randomSymbols[] = $scatter;;
            }
        }
    }
}