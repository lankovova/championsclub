@extends('games.types.gameWithBorder')

@section('css')
    <link href="{{asset('css/money.css')}}" rel=stylesheet type=text/css>
@endsection
    
@section('js')
    @parent
    <script src="{{asset('js/money_settings.js')}}"></script>
    <script src="{{asset('js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('Money');
    </script>
@endsection