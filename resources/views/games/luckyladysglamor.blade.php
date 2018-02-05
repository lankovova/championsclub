@extends('games.types.gameWithBorder')

@section('css')
    <link href="{{asset('public/css/luckyladysglamor.css')}}" rel=stylesheet type=text/css>
@endsection
@section('help')

@component('games.parts.help')
    @slot('helpValues')
        <div data-symbols="4 3" class="help__prize_container"></div>
        <div data-symbols="4 3" data-joker class="help__prize_container"></div>
        <div data-symbols="9 2" class="help__prize_container"></div>
        <div data-symbols="9 2" data-joker class="help__prize_container"></div>
        <div data-symbols="1 8 10" class="help__prize_container"></div>
        <div data-symbols="1 8 10" data-joker class="help__prize_container"></div>
        <div data-symbols="5" class="help__prize_container"></div>
        <div data-symbols="11" class="help__prize_container"></div>
        <div data-symbols="6 12" class="help__prize_container"></div>
        <div data-symbols="6 12" data-joker class="help__prize_container"></div>
        <div data-symbols="7" class="help__prize_container"></div>
        <div data-symbols="7" data-joker class="help__prize_container"></div>
        <div data-symbols="0" class="help__prize_container"></div>
        <div data-symbols="0" data-joker class="help__prize_container"></div>

    @endslot
@endcomponent

@endsection      
@section('js')
    @parent
    <script src="{{asset('public/js/luckyladysglamor_settings.js')}}"></script>
    <script src="{{asset('public/js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('LuckyLadysGlamor');
    </script>
@endsection