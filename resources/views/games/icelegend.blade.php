@extends('games.types.gameWithBorder')

@section('css')
    <link href="{{asset('public/css/icelegend.css')}}" rel=stylesheet type=text/css>
@endsection

@section('gamble')
    @include('games.parts.gamble')
@endsection
@section('help')

@component('games.parts.help')
    @slot('helpValues')
        <div data-symbols="2 3" class="help__prize_container"></div>
        <div data-symbols="2 3" data-joker class="help__prize_container"></div>
        <div data-symbols="11 12" class="help__prize_container"></div>
        <div data-symbols="11 12" data-joker class="help__prize_container"></div>
        <div data-symbols="8 9 10" class="help__prize_container"></div>
        <div data-symbols="8 9 10" data-joker class="help__prize_container"></div>
        <div data-symbols="4" class="help__prize_container"></div>
        <div data-symbols="6" class="help__prize_container"></div>
        <div data-symbols="0 1" class="help__prize_container"></div>
        <div data-symbols="0 1" data-joker class="help__prize_container"></div>
        <div data-symbols="5" class="help__prize_container"></div>
        <div data-symbols="5" data-joker class="help__prize_container"></div>
        <div data-symbols="7" class="help__prize_container"></div>
        <div data-symbols="7" data-joker class="help__prize_container"></div>

    @endslot
@endcomponent

@endsection   
@section('js')
    @parent
    <script src="{{asset('public/js/icelegend_settings.js')}}"></script>
    <script src="{{asset('public/js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('IceLegend');
    </script>
@endsection