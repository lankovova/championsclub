@extends('games.types.gameWithBorder')

@section('css')
    <link href="{{asset('public/css/pepperseven.css')}}" rel=stylesheet type=text/css>
@endsection

@section('gamble')
    @include('games.parts.gamble')
@endsection

@section('help')

    @component('games.parts.help')
        @slot('helpValues')
            <div data-symbols="3" class="help__prize_container"></div>
            <div data-symbols="0" class="help__prize_container"></div>
            <div data-symbols="2 3" class="help__prize_container"></div>
            <div data-symbols="5" class="help__prize_container"></div>
            <div data-symbols="4" class="help__prize_container"></div>
            <div data-symbols="9" class="help__prize_container"></div>
            <div data-symbols="6 7 8" class="help__prize_container"></div>
        @endslot
    @endcomponent

@endsection

@section('js')
    @parent
    <script src="{{asset('public/js/pepperseven_settings.js')}}"></script>
    <script src="{{asset('public/js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('PepperSeven');
    </script>
@endsection