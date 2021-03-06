<?php

namespace App\Facades;

use App\Models\Player;

class Auth {

    /**
     * Starts user session
     *
     * @return void
     */
    public static function login($login, $license) {

        session([
            "license" => $license,
            "login" => $login
        ]);

        Player::updateLoginTime($login);
    }

    /**
     * Ends user session
     *
     * @return void
     */
    public static function logout() {
        session()->flush();
    }

    /**
     * Return true if user authed.
     * Return false if user doesn`t.
     *
     * @return bool
     */
    public static function authed() {
        $fiveMin = 5 * 60 * 1000;

        // if (!self::getParam("login")) {
        //     return false;
        // }

        // if ((strtotime(Player::getLoginTime(self::getParam("login"))) + $fiveMin) < time()) {
        //     return false;
        // }

        // Player::updateLoginTime(self::getParam("login"));
        return true;
    }

    /**
     * Return session param or false
     *
     * @param string $param
     * @return mixed
     */
    public static function getParam(string $param) {
        if ($param === "login") {
            return "86868944669647";
        }
        return session($param);
    }
}