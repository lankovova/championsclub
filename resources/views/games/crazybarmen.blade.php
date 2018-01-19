@extends('games.types.game')

@section('css')
    <link href="{{asset('public/css/crazybarmen.css')}}" rel=stylesheet type=text/css>
@endsection


@section('js')
    @parent
    <script src="{{asset('public/js/crazybarmen_settings.js')}}"></script>
    <script src="{{asset('public/js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('CrazyBarmen');
    </script>
@endsection
