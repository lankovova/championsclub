<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset=utf-8>
    <meta name=viewport content="width=device-width,initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>game-choose</title>
    <link href="{{asset('css/bookofwinner.css')}}" rel=stylesheet type=text/css>
    {{--  <link href="public/css/app.css" rel=stylesheet type=text/css>  --}}
</head>

<body>
    <div id="app"></div>


    {{--  <script src="public/js/main.js"></script>  --}}
    <script src="{{asset('js/bookofwinner_settings.js')}}"></script>
    <script src="{{asset('js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('Bananas');
    </script>
</body>

</html>