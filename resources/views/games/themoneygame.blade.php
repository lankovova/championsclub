@extends('games.types.gameOld')

@section('css')
    <link href="{{asset('public/css/themoneygame.css')}}" rel=stylesheet type=text/css>
@endsection
    
@section('help')
@component('games.parts.help')
    @slot('helpValues')
        <div data-symbols="3 4" class="help__prize_container"></div>
        <div data-symbols="3 4" data-joker class="help__prize_container"></div>
        <div data-symbols="1 2" class="help__prize_container"></div>
        <div data-symbols="1 2" data-joker class="help__prize_container"></div>
        <div data-symbols="0 10 11" class="help__prize_container"></div>
        <div data-symbols="0 10 11" data-joker class="help__prize_container"></div>
        <div data-symbols="12" class="help__prize_container"></div>
        <div data-symbols="8" data-joker class="help__prize_container"></div>
        <div data-symbols="6 7" class="help__prize_container"></div>
        <div data-symbols="6 7" data-joker class="help__prize_container"></div>
        <div data-symbols="5" class="help__prize_container"></div>
        <div data-symbols="5" data-joker class="help__prize_container"></div>
        <div data-symbols="9" class="help__prize_container"></div>
        <div data-symbols="9" data-joker class="help__prize_container"></div>

    @endslot
@endcomponent
@endsection 

@section('js')
    @parent
    <script src="{{asset('public/js/themoneygame_settings.js')}}"></script>
    <script src="{{asset('public/js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('TheMoneyGame');
    </script>
@endsection