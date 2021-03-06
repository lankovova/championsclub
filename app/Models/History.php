<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;
use App\Models\Player;
use App\Facades\Auth;

class History {

    public static function writeGameAction(string $date, $playerCash, string $action, $login, $game=null, $bet=null) {
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

    /**
     * Undocumented function
     *
     * @param [type] $cash
     * @param [type] $idAgent
     * @param [type] $login
     * @return void
     */
    public static function writeInsuranceTransfer($cash, $idAgent, $login) {
        DB::table("historysch")->insert([
            "data" => date("Y-m-d H:i:s"),
            "summa" => $cash,
            "ivent" => 'возврат',
            "subdiler" => $idAgent,
            "PIN" => $login,
            "IP" => $_SERVER['REMOTE_ADDR']
        ]);
    }

    public static function getHistory() {
        return DB::table("stats_pin")
            ->where("PIN", Auth::getParam("login"))
            ->orderBy("data", "desc")
            ->get();
    }

}