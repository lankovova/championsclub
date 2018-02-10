<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Game\GameFactory;

class GameTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testAssertCashPoolCanNotBeBelowZero() {
        $cashPool = 1000;
        $denomination = 1;
        $linesAmount = 10;
        $betPerLine = 5;
        $bet = $linesAmount * $betPerLine * $denomination;

        $loops = 10000;
        $loop = 0;

        while($loop < $loops) {
            $loop++;

            $game = GameFactory::createGame("BookOfWinner", [
                "denomination" => $denomination,
                "lines_amount" => $linesAmount,
                "bet_per_line" => $betPerLine,
                "cash_pool" => $cashPool,
            ]);

            $spinResult = $game->spin();

            $spinResult["total_won_coins"] = $spinResult["won_coins"] + ((isset($spinResult["bonus_spins"])) ? $spinResult["bonus_spins"]["won_coins"] : 0);
            $cashPool -= $spinResult["total_won_coins"];

            if ($cashPool < 0) {
                throw new \League\Flysystem\Exception('Cash pool < 30%. '.'loop '.$loop);
            }
        }
        $this->assertTrue(true);
    }
}
