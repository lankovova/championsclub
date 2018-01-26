<?php

namespace App\Http\Middleware;

use Closure;
use App\Facades\Auth;

class Authenticate
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $type="http")
    {
        if (Auth::authed()) {
            return $next($request);
        }

        if ($type === "json") {
            return response()->json([
                "redirect" => "/"
            ]);
        }
        
        return redirect("/");
    }

}