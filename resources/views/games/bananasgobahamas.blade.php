@extends('games.types.gameOld')

@section('css')
    <link href="{{asset('public/css/bananasgobahamas.css')}}" rel=stylesheet type=text/css>
@endsection
    
@section('help')
@component('games.parts.help')
    @slot('helpValues')
        <div data-symbols="6 7" class="help__prize_container"></div>
        <div data-symbols="6 7" data-joker class="help__prize_container"></div>
        <div data-symbols="2 1" class="help__prize_container"></div>
        <div data-symbols="2 1" data-joker class="help__prize_container"></div>
        <div data-symbols="8" class="help__prize_container"></div>
        <div data-symbols="5" class="help__prize_container"></div>
        <div data-symbols="5" data-joker class="help__prize_container"></div>
        <div data-symbols="12" class="help__prize_container"></div>
        <div data-symbols="0 10 11" class="help__prize_container"></div>
        <div data-symbols="0 10 11" data-joker class="help__prize_container"></div>
        <div data-symbols="3 4" class="help__prize_container"></div>
        <div data-symbols="3 4" data-joker class="help__prize_container"></div>
        <div data-symbols="9" class="help__prize_container"></div>
        <div data-symbols="9" data-joker class="help__prize_container"></div>

    @endslot
@endcomponent
@endsection      

@section('js')
    @parent
    <script src="{{asset('public/js/bananasgobahamas_settings.js')}}"></script>
    <script src="{{asset('public/js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('BananasGoBahamas');
    </script>
@endsection