@extends('games.types.gameOld')

@section('css')
    <link href="{{asset('public/css/gryphonsgold.css')}}" rel=stylesheet type=text/css>
@endsection
    
@section('help')
@component('games.parts.help')
    @slot('helpValues')
        <div data-symbols="2 4" class="help__prize_container"></div>
        <div data-symbols="2 4" data-joker class="help__prize_container"></div>
        <div data-symbols="3 7" class="help__prize_container"></div>
        <div data-symbols="3 7" data-joker class="help__prize_container"></div>
        <div data-symbols="6" class="help__prize_container"></div>
        <div data-symbols="10" class="help__prize_container"></div>
        <div data-symbols="10" data-joker class="help__prize_container"></div>
        <div data-symbols="11" class="help__prize_container"></div>
        <div data-symbols="8" class="help__prize_container"></div>
        <div data-symbols="8" data-joker class="help__prize_container"></div>
        <div data-symbols="0 9" class="help__prize_container"></div>
        <div data-symbols="0 9" data-joker class="help__prize_container"></div>
        <div data-symbols="1 5 12" class="help__prize_container"></div>
        <div data-symbols="1 5 12" data-joker class="help__prize_container"></div>
    @endslot
@endcomponent
@endsection 

@section('js')
    @parent
    <script src="{{asset('public/js/gryphonsgold_settings.js')}}"></script>
    <script src="{{asset('public/js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('GryphonsGold');
    </script>
@endsection