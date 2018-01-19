@extends('games.types.gameWithBorder')

@section('css')
    <link href="{{asset('public/css/robinson.css')}}" rel=stylesheet type=text/css>
@endsection
    
@section('js')
    @parent
    <script src="{{asset('public/js/robinson_settings.js')}}"></script>
    <script src="{{asset('public/js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('Robinson');
    </script>
@endsection