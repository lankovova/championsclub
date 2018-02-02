@extends('games.types.game')

@section('css')
    <link href="{{asset('public/css/goldenharvest.css')}}" rel=stylesheet type=text/css>
@endsection

@section('help')

    @component('games.parts.help')
        @slot('helpValues')
            <div data-symbols="5 12" class="help__prize_container"></div>
            <div data-symbols="5 12" data-joker class="help__prize_container"></div>
            <div data-symbols="2 9" class="help__prize_container"></div>
            <div data-symbols="2 9" data-joker class="help__prize_container"></div>
            <div data-symbols="1 7 11" class="help__prize_container"></div>
            <div data-symbols="1 7 11" data-joker class="help__prize_container"></div>
            <div data-symbols="8" class="help__prize_container"></div>
            <div data-symbols="10" class="help__prize_container"></div>
            <div data-symbols="3 7" class="help__prize_container"></div>
            <div data-symbols="3 7" data-joker class="help__prize_container"></div>
            <div data-symbols="4" class="help__prize_container"></div>
            <div data-symbols="4" data-joker class="help__prize_container"></div>
            <div data-symbols="0" class="help__prize_container"></div>
            <div data-symbols="0" data-joker class="help__prize_container"></div>
        @endslot
    @endcomponent

@endsection
@section('js')
    @parent
    <script src="{{asset('public/js/goldenharvest_settings.js')}}"></script>
    <script src="{{asset('public/js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('GoldenHarvest');
    </script>
@endsection
