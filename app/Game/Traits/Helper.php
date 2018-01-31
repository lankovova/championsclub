<?php

namespace App\Game\Traits;

trait Helper {
    /**
     * Return number number from randomSymbols
     *
     * @return int
     */
    protected function generateRandomSymbol() {
        $key = array_rand($this->randomSymbols, 1);
        return $this->randomSymbols[$key];
    }

    /**
     * Return bet amount without denomination
     *
     * @return int
     */
    protected function bet() {
        return $this->linesAmount * $this->betPerLine;
    }

    /**
     * Return bet amount with denomination
     *
     * @return int
     */
    protected function coinBet() {
        return $this->bet() * $this->denomination;
    }

    /**
     * Fill finalSymbols with random numbers
     * from randomSymbols
     *
     * @return void
     */
    protected function generateFinalSymbols() {
        $this->finalSymbols = [[1,6,7,6,4],[2,3,4,9,5],[7,0,0,8,9]];
        return;
        $this->fillSymbols();
        $this->finalSymbols = [];
        // no same symbols in one row
        // 3 row of symbols
        for ($i = 0; $i < 3; $i++) {
            for ($j = 0; $j < $this->reelsAmount; $j++) {
                $symbol = $this->generateRandomSymbol();
                switch ($i) {
                    case 0:
                        $this->finalSymbols[$i][$j] = $symbol;  
                    break;
                    case 1:
                        do {
                            $symbol = $this->generateRandomSymbol();
                        } while ($this->finalSymbols[0][$j] === $symbol);

                        $this->finalSymbols[$i][$j] = $symbol;
                    break;
                    case 2:
                        do {
                            $symbol = $this->generateRandomSymbol();
                        } while ($this->finalSymbols[0][$j] === $symbol || $this->finalSymbols[1][$j] === $symbol);

                        $this->finalSymbols[$i][$j] = $symbol;
                    break;
                    default:
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
}