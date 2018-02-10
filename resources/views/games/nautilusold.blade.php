@extends('games.types.gameOld')

@section('css')
    <link href="{{asset('public/css/nautilusold.css')}}" rel=stylesheet type=text/css>
@endsection
    
@section('help')
@component('games.parts.help')
    @slot('helpValues')
        <div data-symbols="7 9" class="help__prize_container"></div>
        <div data-symbols="7 9" data-joker class="help__prize_container"></div>
        <div data-symbols="5 11" class="help__prize_container"></div>
        <div data-symbols="5 11" data-joker class="help__prize_container"></div>
        <div data-symbols="3 4 6" class="help__prize_container"></div>
        <div data-symbols="3 4 6" data-joker class="help__prize_container"></div>
        <div data-symbols="12" class="help__prize_container"></div>
        <div data-symbols="8" data-joker class="help__prize_container"></div>
        <div data-symbols="0 1" class="help__prize_container"></div>
        <div data-symbols="0 1" data-joker class="help__prize_container"></div>
        <div data-symbols="10" class="help__prize_container"></div>
        <div data-symbols="10" data-joker class="help__prize_container"></div>
        <div data-symbols="2" class="help__prize_container"></div>
        <div data-symbols="2" data-joker class="help__prize_container"></div>

    @endslot
@endcomponent
@endsection 

@section('js')
    @parent
    <script src="{{asset('public/js/nautilusold_settings.js')}}"></script>
    <script src="{{asset('public/js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('NautilusOld');
    </script>
@endsection