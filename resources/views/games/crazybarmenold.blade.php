@extends('games.types.gameOld')

@section('css')
    <link href="{{asset('public/css/crazybarmenold.css')}}" rel=stylesheet type=text/css>
@endsection
    
@section('help')
@component('games.parts.help')
    @slot('helpValues')
        <div data-symbols="6 10" class="help__prize_container"></div>
        <div data-symbols="6 10" data-joker class="help__prize_container"></div>
        <div data-symbols="7 12" class="help__prize_container"></div>
        <div data-symbols="7 12" data-joker class="help__prize_container"></div>
        <div data-symbols="1 4 8" class="help__prize_container"></div>
        <div data-symbols="1 4 8" data-joker class="help__prize_container"></div>
        <div data-symbols="11" class="help__prize_container"></div>
        <div data-symbols="9" class="help__prize_container"></div>
        <div data-symbols="0 2" class="help__prize_container"></div>
        <div data-symbols="0 2" data-joker class="help__prize_container"></div>
        <div data-symbols="5" class="help__prize_container"></div>
        <div data-symbols="5" data-joker class="help__prize_container"></div>
        <div data-symbols="3" class="help__prize_container"></div>
        <div data-symbols="3" data-joker class="help__prize_container"></div>

    @endslot
@endcomponent
@endsection   

@section('js')
    @parent
    <script src="{{asset('public/js/crazybarmenold_settings.js')}}"></script>
    <script src="{{asset('public/js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('CrazyBarmenOld');
    </script>
@endsection