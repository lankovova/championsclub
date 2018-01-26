<?php
use App\Facades\Auth;

Route::get("/", function () {
    return view("welcome");
});

Route::post("/login", "AuthController@login")->name("login");
Route::get("/logout", "AuthController@logout")->name("logout");

Route::get("/isplayerauthed", function()  {
    return response()->json([
        "authed" => Auth::authed()
    ]);
})->name("isplayerauthed");

Route::group(['middleware' => ['auth:json']], function () {

    Route::post("/spin", "GameController@spin")->name("spin");
    Route::post("/gamble", "GameController@gamble")->name("gamble");

    Route::post("/getplayerinfo", "InfoController@getPlayerInfo")->name("getplayerinfo");
    Route::post("/gethistory", "InfoController@getHistory")->name("gethistory");
    
});

Route::get('/{game}', function ($game) {

    if (view()->exists("games.$game")) {
        return view("games.$game");
    }
    
    return redirect('/');
})->middleware('auth');
