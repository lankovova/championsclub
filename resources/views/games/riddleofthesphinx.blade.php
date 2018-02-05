@extends('games.types.gameWithBorder')

@section('css')
    <link href="{{asset('public/css/riddleofthesphinx.css')}}" rel=stylesheet type=text/css>
@endsection
    
@section('help')

    @component('games.parts.help')
        @slot('helpValues')
        <div data-symbols="5" class="help__prize_container"></div>
        <div data-symbols="10" class="help__prize_container"></div>
        <div data-symbols="11" class="help__prize_container"></div>
        <div data-symbols="3 9 1" class="help__prize_container"></div>
        <div data-symbols="4" class="help__prize_container"></div>
        <div data-symbols="0 2" class="help__prize_container"></div>
        @endslot
    @endcomponent

@endsection

@section('js')
    @parent
    <script src="{{asset('public/js/riddleofthesphinx_settings.js')}}"></script>
    <script src="{{asset('public/js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('RiddleOfTheSphinx');
    </script>
@endsection