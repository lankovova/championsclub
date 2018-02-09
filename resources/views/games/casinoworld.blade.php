@extends('games.types.gameWithBorder')

@section('css')
    <link href="{{asset('public/css/casinoworld.css')}}" rel=stylesheet type=text/css>
@endsection

@section('gamble')
    @include('games.parts.gamble')
@endsection

@section('help')
    @component('games.parts.help')
        @slot('helpValues')
            <div data-symbols="11 6" class="help__prize_container"></div>
            <div data-symbols="11 6" data-joker class="help__prize_container"></div>
            <div data-symbols="2 8" class="help__prize_container"></div>
            <div data-symbols="2 8" data-joker class="help__prize_container"></div>
            <div data-symbols="4" class="help__prize_container"></div>
            <div data-symbols="3"  class="help__prize_container"></div>
            <div data-symbols="3"  data-joker class="help__prize_container"></div>
            <div data-symbols="9" class="help__prize_container"></div>
            <div data-symbols="1 7 10"  class="help__prize_container"></div>
            <div data-symbols="1 7 10" data-joker class="help__prize_container"></div>
            <div data-symbols="12 5"  class="help__prize_container"></div>
            <div data-symbols="12 5" data-joker class="help__prize_container"></div>
            <div data-symbols="0" class="help__prize_container"></div>
            <div data-symbols="0" data-joker class="help__prize_container"></div>

        @endslot
    @endcomponent
@endsection       

@section('js')
    @parent
    <script src="{{asset('public/js/casinoworld_settings.js')}}"></script>
    <script src="{{asset('public/js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('CasinoWorld');
    </script>
@endsection