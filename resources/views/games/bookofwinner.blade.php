@extends('games.types.game')

@section('css')
    <link href="{{asset('public/css/bookofwinner.css')}}" rel=stylesheet type=text/css>
@endsection

@section('help')
    @include('games.parts.helpSubstitution')
@endsection

@section('js')
    @parent
    <script src="{{asset('public/js/bookofwinner_settings.js')}}"></script>
    <script src="{{asset('public/js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('BookOfWinner');
    </script>
@endsection
