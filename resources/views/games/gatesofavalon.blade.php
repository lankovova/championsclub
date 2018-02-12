@extends('games.types.game')

@section('css')
    <link href="{{asset('public/css/gatesofavalon.css')}}" rel=stylesheet type=text/css>
@endsection

@section('help')

    @component('games.parts.help')
        @slot('helpValues')
            <div data-symbols="3" class="help__prize_container"></div>
            <div data-symbols="5" class="help__prize_container"></div>
            <div data-symbols="1 8 11" class="help__prize_container"></div>

            <div data-symbols="10" class="help__prize_container"></div>

            <div data-symbols="6 9" class="help__prize_container"></div>
            <div data-symbols="4" class="help__prize_container"></div>
            <div data-symbols="2" class="help__prize_container"></div>
            <div data-symbols="0 7" class="help__prize_container"></div>
        @endslot
    @endcomponent

@endsection

@section('js')
    @parent
    <script src="{{asset('public/js/gatesofavalon_settings.js')}}"></script>
    <script src="{{asset('public/js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('GatesOfAvalon');
    </script>
@endsection
