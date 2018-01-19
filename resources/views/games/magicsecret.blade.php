@extends('games.types.gameWithBorder')

@section('css')
    <link href="{{asset('public/css/magicsecret.css')}}" rel=stylesheet type=text/css>
@endsection
    
@section('js')
    @parent
    <script src="{{asset('public/js/magicsecret.js')}}"></script>
    <script src="{{asset('public/js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('MagicSecret');
    </script>
@endsection