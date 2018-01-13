<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;

class Agent {

    private $id;

    function __construct($id) {
        $this->id = $id;
    }

    public function getAgentCash() {
        $subBalance = DB::table("subdiler")
            ->where("sub_id", $this->id)
            ->value("sub_balance");

        return $subBalance;
    }

    public function getTotalAgentCashIn() {
        $inm = DB::table("transfers")
            ->where("touser", $this->id)
            ->sum("inm");

        return $inm;
    }

    public function getTotalPlayersCash() {
        $cash = DB::table("users")
            ->where("id_agent", $this->id)
            ->sum("cash");

        return $cash;
    }
}