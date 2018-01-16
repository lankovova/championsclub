<?php

namespace App\Http\Middleware;

use Closure;

class AccessControlAllowOrigin
{
    public function handle($request, Closure $next)
    {
        $response = $next($request);

        $response
            ->header("Access-Control-Allow-Origin", "*")
            ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
            ->header('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization, X-Requested-With');
            // ->header('Content-Type', 'application/javascript, *');

        return $response;
    }
}