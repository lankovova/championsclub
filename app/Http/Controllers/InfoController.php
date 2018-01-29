<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Player;
use App\Models\History;
use App\Facades\Auth;

class InfoController extends Controller
{
    public function getPlayerInfo() {
        $player = new Player(Auth::getParam("login"));
        // Transfer insurance
        if ($player->getCash() <= 0) {
            $success = $player->transferInsurance();
            if ($success) {
                $player->update();
                History::writeInsuranceTransfer(
                    $player->getCash(),
                    $player->getIdAgent(),
                    Auth::getParam("login")
                );
            }
        }

        return response()->json([
            "cash" => $player->getCash(),
            "insurance" => $player->getInsurance(),
            "denomination" => [0.01, 0.1, 0.25, 0.5, 1],
            "bet_per_line" => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30, 40, 50, 60, 70, 80, 90, 100],
        ]);
    }

    public function getHistory(Request $request) {

        return response()->json(History::getHistory());
    }
}
