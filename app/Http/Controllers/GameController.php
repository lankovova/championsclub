<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Player;
use App\Models\History;
use App\Facades\Auth;
use App\Game\GameFactory;
use App\Game\GameInterface;
use App\Game\Gamble;

class GameController extends Controller
{
    private $player;

    public function gamble(Request $request) {
        $card = (string)$request->input("card");
        $this->player = new Player(Auth::getParam("login"));
        $cashPool = $this->player->getCashPool() * 100;
        $lastWonCoins = $this->player->getlastWonCash() * 100;

        $gamble = new Gamble($card, $cashPool, $lastWonCoins);
        $result = $gamble->getResult();

        $date = date("Y-m-d H:i:s");
        $playerCash = $result["won"] ?
            ($this->player->getCash() - $this->player->getlastWonCash() + $result["won_coins"] / 100) :
            ($this->player->getCash() - $this->player->getlastWonCash());

        $action = $result["won"] ? "game gamble win" : "game gamble loose";
        $login = Auth::getParam("login");

        History::writeGameAction($date, $playerCash, $action, $login);

        $this->player->setCash($playerCash);
        $this->player->setLastWinCash($result["won_coins"] / 100);
        $this->player->setMaxWinCash($this->player->getMaxWinCash() - $result["won_coins"] / 100);
        $this->player->update();

        return response()->json($result);
    }

    public function spin(Request $request) {
        $reqData = $this->validateRequest($request);
        $this->player = new Player(Auth::getParam("login"));
        // All count in coins

        if (($this->player->getCash() * 100) < ($reqData["denomination"] * $reqData["lines_amount"] * $reqData["bet_per_line"])) {
            echo "not enough money";
            exit;
        }

        $game = GameFactory::createGame($reqData["game"], [
            "denomination" => $reqData["denomination"],
            "lines_amount" => $reqData["lines_amount"],
            "bet_per_line" => $reqData["bet_per_line"],
            "cash_pool" => $this->player->getCashPool() * 100,
        ]);

        $result = $this->getResults($game, $reqData);
        $this->saveResult($result);

        return response()->json($result);
    }

    /**
     * Forms game result report
     *
     * @param GameInterface $game
     * @return void
     */
    private function getResults(GameInterface $game, $reqData) {
        $spinResult = $game->spin();

        // turn off bonus spins
        switch ($reqData["game"]) {
            case "RollOfRamses":
            case "PepperSeven":
            case "MagicSecret":
            case "BookOfWins":
            case "ScatterWins":
                while ($game->areBonusSpins()) {
                    $spinResult = $game->spin();
                }
            break;
        }

        if ($game->areBonusSpins()) {
            $spinResult["bonus_spins"] = $game->bonusSpin();
            $spinResult["bonus_spins"]["amount"] = $game::$freeSpinsAmount;
        }

        $spinResult["total_won_coins"] = $spinResult["won_coins"] + ((isset($spinResult["bonus_spins"])) ? $spinResult["bonus_spins"]["won_coins"] : 0);
        $spinResult["total_won_points"] = $spinResult["won_points"] + ((isset($spinResult["bonus_spins"])) ? $spinResult["bonus_spins"]["won_points"] : 0);
        $spinResult["bet"] = $reqData["lines_amount"] * $reqData["bet_per_line"];
        $spinResult["player_cash"] = $this->player->getCash() + ($spinResult["total_won_coins"] -$spinResult["bet"] * $reqData["denomination"]) / 100;
        $spinResult["player_coins"] = (int)($this->player->getCash() * 100) + $spinResult["total_won_coins"] - ($spinResult["bet"] * $reqData["denomination"]);
        $spinResult["game"] = $reqData["game"];

        return $spinResult;
    }

    /**
     * Save game result to Database
     *
     * @param array $result
     * @return void
     */
    private function saveResult(array $result) {
        $date = date("Y-m-d H:i:s");
        $playerCash = $result["player_cash"];
        $action = $result["won"] ? "game bet, win" : "game bet, no win";
        $login = Auth::getParam("login");
        $game = $result["game"];
        $bet = $result["bet"];

        History::writeGameAction($date, $playerCash, $action, $login, $game, $bet);

        $this->player->setCash($result["player_cash"]);
        $this->player->setLastWinCash($result["total_won_coins"] / 100);
        $this->player->setMaxWinCash($this->player->getMaxWinCash() - $result["total_won_coins"] / 100);
        $this->player->update();
    }

    private function validateRequest($request) {

        return [
            "lines_amount" => (int)$request->input("lines_amount"),
            "bet_per_line" => (int)$request->input("bet_per_line"),
            "denomination" => (int)$request->input("denomination"),
            "game" => (string)$request->input("game")
        ];
    }
}
