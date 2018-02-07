@extends('games.types.game')

@section('css')
    <link href="{{asset('public/css/gatesofavalon.css')}}" rel=stylesheet type=text/css>
@endsection

@component('games.parts.help')
    @slot('helpValues')
        <div data-symbols="12 11" class="help__prize_container"></div>
        <div data-symbols="12 11" data-joker class="help__prize_container"></div>
        <div data-symbols="2 7" class="help__prize_container"></div>
        <div data-symbols="2 7" data-joker class="help__prize_container"></div>
        <div data-symbols="4" class="help__prize_container"></div>
        <div data-symbols="9"  class="help__prize_container"></div>
        <div data-symbols="9" data-joker class="help__prize_container"></div>
        <div data-symbols="3" class="help__prize_container"></div>
        <div data-symbols="1 6 10" class="help__prize_container"></div>
        <div data-symbols="1 6 10" data-joker class="help__prize_container"></div>
        <div data-symbols="5 8" class="help__prize_container"></div>
        <div data-symbols="5 8" data-joker class="help__prize_container"></div>
        <div data-symbols="0" class="help__prize_container"></div>
        <div data-symbols="0" data-joker class="help__prize_container"></div>

    @endslot
@endcomponent

@section('js')
    @parent
    <script src="{{asset('public/js/gatesofavalon_settings.js')}}"></script>
    <script src="{{asset('public/js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('GatesOfAvalon');
    </script>
@endsection
