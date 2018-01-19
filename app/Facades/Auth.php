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
        $_SESSION["license"] = $license;
        $_SESSION["login"] = $login;
        Player::updateLoginTime($login);
    }

    /**
     * Ends user session
     *
     * @return void
     */
    public static function logout() {
        $_SESSION = [];
        session_destroy();
    }

    /**
     * Return true if user authed.
     * Return false if user doesn`t.
     *
     * @return bool
     */
    public static function authed() {
        $fiveMin = 5 * 60 * 1000;
        if (strtotime(Player::getLoginTime()) > (time() + $fiveMin)) {
            return false;
        }
        return true;
    }

    /**
     * Return session param or false
     *
     * @param string $param
     * @return mixed
     */
    public static function getParam(string $param) {
        // if ($param === "login") {
        //     return "06509468906399";
        // }
        return isset($_SESSION[$param]) ? $_SESSION[$param] : false;
    }
}