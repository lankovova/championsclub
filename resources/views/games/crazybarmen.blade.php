@extends('games.types.game')

@section('css')
    <link href="{{asset('public/css/crazybarmen.css')}}" rel=stylesheet type=text/css>
@endsection
@section('help')

@component('games.parts.help')
    @slot('helpValues')
        <div data-symbols="7 6" class="help__prize_container"></div>
        <div data-symbols="7 6" data-joker class="help__prize_container"></div>
        <div data-symbols="2 9" class="help__prize_container"></div>
        <div data-symbols="2 9" data-joker class="help__prize_container"></div>
        <div data-symbols="1 8 10" class="help__prize_container"></div>
        <div data-symbols="1 8 10" data-joker class="help__prize_container"></div>
        <div data-symbols="5" class="help__prize_container"></div>
        <div data-symbols="3" class="help__prize_container"></div>
        <div data-symbols="11 12" class="help__prize_container"></div>
        <div data-symbols="11 12" data-joker class="help__prize_container"></div>
        <div data-symbols="4" class="help__prize_container"></div>
        <div data-symbols="4" data-joker class="help__prize_container"></div>
        <div data-symbols="0" class="help__prize_container"></div>
        <div data-symbols="0" data-joker class="help__prize_container"></div>

    @endslot
@endcomponent

@endsection   

@section('js')
    @parent
    <script src="{{asset('public/js/crazybarmen_settings.js')}}"></script>
    <script src="{{asset('public/js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('CrazyBarmen');
    </script>
@endsection
