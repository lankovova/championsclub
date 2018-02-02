@extends('games.types.gameWithBorder')

@section('css')
    <link href="{{asset('public/css/savannaqueen.css')}}" rel=stylesheet type=text/css>
@endsection
@section('help')

@component('games.parts.help')
    @slot('helpValues')
        <div data-symbols="8 9" class="help__prize_container"></div>
        <div data-symbols="8 9" data-joker class="help__prize_container"></div>
        <div data-symbols="2 7" class="help__prize_container"></div>
        <div data-symbols="2 7" data-joker class="help__prize_container"></div>
        <div data-symbols="1 5 11" class="help__prize_container"></div>
        <div data-symbols="1 5 11" data-joker class="help__prize_container"></div>
        <div data-symbols="6" class="help__prize_container"></div>
        <div data-symbols="12" class="help__prize_container"></div>
        <div data-symbols="4 3" class="help__prize_container"></div>
        <div data-symbols="4 3" data-joker class="help__prize_container"></div>
        <div data-symbols="10" class="help__prize_container"></div>
        <div data-symbols="10" data-joker class="help__prize_container"></div>
        <div data-symbols="0" class="help__prize_container"></div>
        <div data-symbols="0" data-joker class="help__prize_container"></div>

    @endslot
@endcomponent

@endsection     
@section('js')
    @parent
    <script src="{{asset('public/js/savannaqueen_settings.js')}}"></script>
    <script src="{{asset('public/js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('SavannaQueen');
    </script>
@endsection