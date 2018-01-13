<?php

Route::get("/", function () {
    return view("welcome");
});

Route::post("/login", "AuthController@login")->name("login");
Route::get("/logout", "AuthController@logout")->name("logout");


Route::post("/spin", "GameController@spin")->name("spin");
Route::post("/gamble", "GameController@gamble")->name("gamble");

Route::post("/getplayerinfo", "InfoController@getPlayerInfo")->name("getplayerinfo");
Route::post("/gethistory", "InfoController@getHistory")->name("gethistory");