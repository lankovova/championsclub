@extends('games.types.gameOld')

@section('css')
    <link href="{{asset('public/css/sealight.css')}}" rel=stylesheet type=text/css>
@endsection
    
@section('help')
@component('games.parts.help')
    @slot('helpValues')
        <div data-symbols="3 12" class="help__prize_container"></div>
        <div data-symbols="3 12" data-joker class="help__prize_container"></div>
        <div data-symbols="2 8" class="help__prize_container"></div>
        <div data-symbols="2 8" data-joker class="help__prize_container"></div>
        <div data-symbols="1 6 10" class="help__prize_container"></div>
        <div data-symbols="1 6 10" data-joker class="help__prize_container"></div>
        <div data-symbols="7" class="help__prize_container"></div>
        <div data-symbols="11" data-joker class="help__prize_container"></div>
        <div data-symbols="5 9" class="help__prize_container"></div>
        <div data-symbols="5 9" data-joker class="help__prize_container"></div>
        <div data-symbols="4" class="help__prize_container"></div>
        <div data-symbols="4" data-joker class="help__prize_container"></div>
        <div data-symbols="0" class="help__prize_container"></div>
        <div data-symbols="0" data-joker class="help__prize_container"></div>

    @endslot
@endcomponent
@endsection 

@section('js')
    @parent
    <script src="{{asset('public/js/sealight_settings.js')}}"></script>
    <script src="{{asset('public/js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('SeaLight');
    </script>
@endsection