@extends('games.types.gameWithBorder')

@section('css')
    <link href="{{asset('public/css/casinoandstars.css')}}" rel=stylesheet type=text/css>
@endsection

@section('gamble')
    @include('games.parts.gamble')
@endsection

@section('js')
    @parent
    <script src="{{asset('public/js/casinoandstars_settings.js')}}"></script>
    <script src="{{asset('public/js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('CasinoAndStars');
    </script>
@endsection