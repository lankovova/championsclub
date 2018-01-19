@extends('games.types.gameWithBorder')

@section('css')
    <link href="{{asset('css/billiardworld.css')}}" rel=stylesheet type=text/css>
@endsection
    
@section('js')
    @parent
    <script src="{{asset('js/billiardworld_settings.js')}}"></script>
    <script src="{{asset('js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('BilliardWorld');
    </script>
@endsection