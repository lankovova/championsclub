@extends('games.types.game')

@section('css')
    <link href="{{asset('public/css/gatesofavalon.css')}}" rel=stylesheet type=text/css>
@endsection


@section('js')
    @parent
    <script src="{{asset('public/js/gatesofavalon_settings.js')}}"></script>
    <script src="{{asset('public/js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('GatesOfAvalon');
    </script>
@endsection
