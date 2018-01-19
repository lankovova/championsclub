@extends('games.types.game')

@section('css')
    <link href="{{asset('css/scatterwins.css')}}" rel=stylesheet type=text/css>
@endsection


@section('js')
    @parent
    <script src="{{asset('js/scatterwins_settings.js')}}"></script>
    <script src="{{asset('js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('ScatterWins');
    </script>
@endsection
