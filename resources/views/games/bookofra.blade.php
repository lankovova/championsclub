@extends('games.types.gameOld')

@section('css')
    <link href="{{asset('public/css/bookofra.css')}}" rel=stylesheet type=text/css>
@endsection

@section('help')
@component('games.parts.help')
    @slot('helpValues')
        <div data-symbols="0" class="help__prize_container"></div>
        <div data-symbols="2" class="help__prize_container"></div>
        <div data-symbols="4 5" class="help__prize_container"></div>
        <div data-symbols="9" class="help__prize_container"></div>
        <div data-symbols="1" class="help__prize_container"></div>
        <div data-symbols="3" class="help__prize_container"></div>
        <div data-symbols="6 7 8" class="help__prize_container"></div>
        
        

    @endslot
@endcomponent
@endsection     

@section('js')
    @parent
    <script src="{{asset('public/js/bookofra_settings.js')}}"></script>
    <script src="{{asset('public/js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('BookOfRa');
    </script>
@endsection