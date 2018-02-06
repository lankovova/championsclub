@extends('games.types.game')

@section('css')
    <link href="{{asset('public/css/kingofjewels.css')}}" rel=stylesheet type=text/css>
@endsection

@section('gamble')
    @include('games.parts.gamble')
@endsection
@section('help')
@component('games.parts.help')
    @slot('helpValues')
        <div data-symbols="4" class="help__prize_container"></div>
        <div data-symbols="0 7" class="help__prize_container"></div>
        <div data-symbols="1" class="help__prize_container"></div>
        <div data-symbols="3" class="help__prize_container"></div>
        <div data-symbols="2" class="help__prize_container"></div>
        <div data-symbols="5 6" class="help__prize_container"></div>
     @endslot
@endcomponent

@section('js')
    @parent
    <script src="{{asset('public/js/kingofjewels_settings.js')}}"></script>
    <script src="{{asset('public/js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('KingOfJewels');
    </script>
@endsection
