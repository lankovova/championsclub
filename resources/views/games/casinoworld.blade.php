@extends('games.types.gameWithBorder')

@section('css')
    <link href="{{asset('css/casinoworld.css')}}" rel=stylesheet type=text/css>
@endsection
    
@section('js')
    @parent
    <script src="{{asset('js/casinoworld_settings.js')}}"></script>
    <script src="{{asset('js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('CasinoWorld');
    </script>
@endsection