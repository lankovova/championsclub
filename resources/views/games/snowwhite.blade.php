@extends('games.types.gameWithBorder')

@section('css')
    <link href="{{asset('public/css/snowwhite.css')}}" rel=stylesheet type=text/css>
@endsection
    
@section('js')
    @parent
    <script src="{{asset('public/js/snowwhite_settings.js')}}"></script>
    <script src="{{asset('public/js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('SnowWhite');
    </script>
@endsection