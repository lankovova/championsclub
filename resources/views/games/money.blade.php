@extends('games.types.gameWithBorder')

@section('css')
    <link href="{{asset('public/css/money.css')}}" rel=stylesheet type=text/css>
@endsection
@section('help')

@component('games.parts.help')
    @slot('helpValues')
        <div data-symbols="12 4" class="help__prize_container"></div>
        <div data-symbols="12 4" data-joker class="help__prize_container"></div>
        <div data-symbols="8 2" class="help__prize_container"></div>
        <div data-symbols="8 2" data-joker class="help__prize_container"></div>
        <div data-symbols="1 7 10" class="help__prize_container"></div>
        <div data-symbols="1 7 10" data-joker class="help__prize_container"></div>
        <div data-symbols="9" class="help__prize_container"></div>
        <div data-symbols="5" class="help__prize_container"></div>
        <div data-symbols="6 3" class="help__prize_container"></div>
        <div data-symbols="6 3" data-joker class="help__prize_container"></div>
        <div data-symbols="11" class="help__prize_container"></div>
        <div data-symbols="11" data-joker class="help__prize_container"></div>
        <div data-symbols="0" class="help__prize_container"></div>
        <div data-symbols="0" data-joker class="help__prize_container"></div>

    @endslot
@endcomponent

@endsection       
@section('js')
    @parent
    <script src="{{asset('public/js/money_settings.js')}}"></script>
    <script src="{{asset('public/js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('Money');
    </script>
@endsection