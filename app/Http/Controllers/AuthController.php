<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Player;
use App\Models\History;
use App\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $res = ["error" => true];
        $code = $request->input("code");
        $license = $request->input("license");
        $p = new Player($code);

        if (Player::exist($code)) {
            Auth::login($code, $license);
            History::writeAuthAction($code, "login");
            $res["error"] = false;
        }

        return response()->json($res);
    }

    public function logout()
    {
        History::writeAuthAction(Auth::getParam("login"), "logout");
        Auth::logout();
    }


}
