@extends('games.types.gameOld')

@section('css')
    <link href="{{asset('public/css/luckyladyscharm.css')}}" rel=stylesheet type=text/css>
@endsection
    
@section('help')
@component('games.parts.help')
    @slot('helpValues')
        <div data-symbols="7 8" class="help__prize_container"></div>
        <div data-symbols="7 8" data-joker class="help__prize_container"></div>
        <div data-symbols="5 6" class="help__prize_container"></div>
        <div data-symbols="5 6" data-joker class="help__prize_container"></div>
        <div data-symbols="2 3 4" class="help__prize_container"></div>
        <div data-symbols="2 3 4" data-joker class="help__prize_container"></div>
        <div data-symbols="12" class="help__prize_container"></div>
        <div data-symbols="0" data-joker class="help__prize_container"></div>
        <div data-symbols="10 11" class="help__prize_container"></div>
        <div data-symbols="10 11" data-joker class="help__prize_container"></div>
        <div data-symbols="9" class="help__prize_container"></div>
        <div data-symbols="9" data-joker class="help__prize_container"></div>
        <div data-symbols="1" class="help__prize_container"></div>
        <div data-symbols="1" data-joker class="help__prize_container"></div>

    @endslot
@endcomponent
@endsection    

@section('js')
    @parent
    <script src="{{asset('public/js/luckyladyscharm_settings.js')}}"></script>
    <script src="{{asset('public/js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('LuckyLadysCharm');
    </script>
@endsection