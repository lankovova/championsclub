<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;
use App\Models\Player;
use App\Facades\Auth;

class History {

    public static function writeGameAction($date, $playerCash, $action, $login, $game="", $bet="") {
        DB::table("stats_pin")->insert([
            "data" => $date,
            "summa" => $playerCash,
            "sobytie" => $action,
            "PIN" => $login,
            "game" => $game,
            "stav" => $bet
        ]);
    }

    public static function writeAuthAction($login, $action) {
        DB::table("stats_pin")->insert([
            "data" => date("Y-m-d H:i:s"),
            "summa" => Player::getCashByLogin($login),
            "sobytie" => $action,
            "PIN" => $login
        ]);
    }

    public static function getHistory() {
        return DB::table("stats_pin")
            ->where("PIN", Auth::getParam("login"))
            ->orderBy("data", "desc")
            ->get();
    }

}