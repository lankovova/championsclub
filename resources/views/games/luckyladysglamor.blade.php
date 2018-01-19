@extends('games.types.gameWithBorder')

@section('css')
    <link href="{{asset('public/css/luckyladysglamor.css')}}" rel=stylesheet type=text/css>
@endsection
    
@section('js')
    @parent
    <script src="{{asset('public/js/luckyladysglamor_settings.js')}}"></script>
    <script src="{{asset('public/js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('LuckyLadysGlamor');
    </script>
@endsection