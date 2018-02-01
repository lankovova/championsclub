<?php

namespace App\Game;

use App\Game\Traits\WinChecker;

class Gamble {
    use WinChecker;

    private $playerCard;
    private $cashPool;
    private $result;
    private $lastwonCoins;
    private $wonCoins;
    private $cards = [
        'heart', 'diamond', 'club', 'spade'
    ];

    function __construct($playerCard, $cashPool, $lastwonCoins) {
        $this->playerCard = $playerCard;
        $this->cashPool = $cashPool;
        $this->lastwonCoins = $lastwonCoins;

        $this->start();
    }

    private function start() {
        $randCard = $this->randCard();

        switch(true) {
            case ($this->playerCard === "red") && ($randCard === "heart" || $randCard === "diamond"):
                $this->wonCoins = $this->lastwonCoins * 2;
            break;
            case ($this->playerCard === "black") && ($randCard === "club" || $randCard === "spade"):
                $this->wonCoins = $this->lastwonCoins * 2;
            break;
            case ($this->playerCard === $randCard):
                $this->wonCoins = $this->lastwonCoins * 4;
            break;
            default:
                $this->wonCoins = 0;
            break;
        }

        if (!$this->canUserWin($this->wonCoins)) {
            $this->start();
            return;
        }

        $this->result = [
            "won" => $this->wonCoins > 0,
            "won_coins" => $this->wonCoins,
            "rand_card" => $randCard
        ];
    }

    /**
     * Random card
     *
     * @return string
     */
    private function randCard(): string {
        $key = array_rand($this->cards, 1);
        return $this->cards[$key];
    }

    public function getResult() {
        return $this->result;
    }

}