<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Player;
use App\Models\History;
use App\Facades\Auth;

class InfoController extends Controller
{
    public function getPlayerInfo() {
        return response()->json([
            "cash" => Player::getCashByLogin(Auth::getParam("login")),
            "denomination" => [0.01, 0.1, 0.25, 0.5, 1],
            "bet_per_line" => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30, 40, 50, 60, 70, 80, 90, 100],
        ]);
    }

    public function getHistory(Request $request) {

        return response()->json(History::getHistory());
    }
}
