<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;

class Player {

    private $login;
    private $idAgent;
    private $maxWinCash;
    private $lastWinCash;
    private $cash;
    private $insurance;
    private $totalPaidInsurance;

    function __construct(string $login) {
        $this->setLogin($login);
        $this->init();
    }

    private function setLogin(string $login) {
        $this->login = $login;
    }

    private function init() {
        $player = DB::table("users")
            ->select("id_agent", "user_max_win_cash", "user_last_win_cash", "cash", "pcash", "total_paid_pcash")
            ->where("login", $this->login)->first();

        $this->idAgent = $player->id_agent;
        $this->maxWinCash = $player->user_max_win_cash;
        $this->lastWinCash = $player->user_last_win_cash;
        $this->cash = $player->cash;
        $this->insurance = $player->pcash;
        $this->totalPaidInsurance = $player->total_paid_pcash;
    }

    public function getCashPool() {
        $agent = new Agent($this->idAgent); 
        $totalPlayersCash = $agent->getTotalPlayersCash();
        $totalAgentCashIn = $agent->getTotalAgentCashIn();
        $agentCash = $agent->getAgentCash();
        // Cash that subdiller transfer to players.
        $agentTransToPlayersCash = $totalAgentCashIn - $agentCash;
        // 30% that goes to subdiller. THIS SUM PLAYERS MUST LOOSE.
        $playersMustLooseCash = $agentTransToPlayersCash * 0.3; 
        // Cash that players alredy lost.
        $playersLostCash = $agentTransToPlayersCash - $totalPlayersCash;

        if ($playersLostCash > $playersMustLooseCash) {
            $cashPool = $playersLostCash - $playersMustLooseCash;
        } else {
            // Minimal cashpool so players dont loose all the time.
            $cashPool = 0.10;
        }

        if ($cashPool > $this->maxWinCash) {
            $cashPool = $this->maxWinCash;
        }

        return $cashPool;
    }

    public function update() {
        DB::table("users")
            ->where("login", $this->login)
            ->update([
                "cash" => $this->cash,
                "pcash" => $this->insurance,
                "total_paid_pcash" => $this->totalPaidInsurance,
                "user_last_win_cash" => $this->lastWinCash,
                "user_max_win_cash" => $this->maxWinCash,
                "sessions_at" => date("Y-m-d H:i:s")
            ]);
    }
    /**
     * Transfer insurance to cash
     *
     * @return boolean
     */
    public function transferInsurance(): bool {
        if ($this->insurance == 0) {
            return false;
        }
        $this->cash = $this->insurance;
        $this->insurance = 0;

        return true;
    }

    public function getIdAgent() {
        return $this->idAgent;
    }

    public function getlastWonCash() {
        return $this->lastWinCash;
    }

    public function getCash() {
        return $this->cash;
    }

    public function getInsurance() {
        return $this->insurance;
    }

    public function setCash(float $cash) {
        $this->cash = $cash;
    }

    public function setLastWinCash(float $cash) {
        $this->lastWinCash = $cash;
    }

    public function getMaxWinCash() {
        return $this->maxWinCash;
    }

    public function setMaxWinCash(float $cash) {
        $this->maxWinCash = $cash;
    }
    /**
     * Checks if login exist in database.
     *
     * @param string $login
     * @return bool
     */
    public static function exist(string $login) {
        // echo $login;exit;
        $res = DB::table("users")->where("login", $login)->count();
        return $res > 0;
    }
    /**
     * Update Players login time.
     *
     * @param string $login
     * @return void
     */
    public static function updateLoginTime(string $login) {
        DB::table("users")
            ->where("login", $login)
            ->update(["sessions_at" => date("Y-m-d H:i:s")]);
    }
    /**
     * Return Players last activness.
     *
     * @param string $login
     * @return string
     */
    public static function getLoginTime(string $login): string {
        $sessions_at = DB::table("users")
            ->where("login", $login)
            ->value("sessions_at");

        return $sessions_at;
    }
    /**
     * Return Players cash.
     *
     * @param string $login
     * @return string
     */
    public static function getCashByLogin(string $login): string {
        $cash = DB::table("users")
            ->where("login", $login)
            ->value("cash");

        return $cash;
    }

}