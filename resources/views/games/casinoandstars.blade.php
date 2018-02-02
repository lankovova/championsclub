@extends('games.types.gameWithBorder')

@section('css')
    <link href="{{asset('public/css/casinoandstars.css')}}" rel=stylesheet type=text/css>
@endsection

@section('gamble')
    @include('games.parts.gamble')
@endsection
@section('help')

@component('games.parts.help')
    @slot('helpValues')
        <div data-symbols="10" class="help__prize_container"></div>
        <div data-symbols="12 7" class="help__prize_container"></div>
        <div data-symbols="12 7" data-joker class="help__prize_container"></div>
        <div data-symbols="2 6" class="help__prize_container"></div>
        <div data-symbols="2 6" data-joker class="help__prize_container"></div>
        <div data-symbols="1 5 9" class="help__prize_container"></div>
        <div data-symbols="1 5 9" data-joker class="help__prize_container"></div>
        <div data-symbols="11" class="help__prize_container"></div>
        <div data-symbols="4" class="help__prize_container"></div>
        <div data-symbols="4" data-joker class="help__prize_container"></div>
        <div data-symbols="8 3" class="help__prize_container"></div>
        <div data-symbols="8 3" data-joker class="help__prize_container"></div>
        <div data-symbols="0" class="help__prize_container"></div>
        <div data-symbols="0" data-joker class="help__prize_container"></div>

    @endslot
@endcomponent

@endsection   
@section('js')
    @parent
    <script src="{{asset('public/js/casinoandstars_settings.js')}}"></script>
    <script src="{{asset('public/js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('CasinoAndStars');
    </script>
@endsection