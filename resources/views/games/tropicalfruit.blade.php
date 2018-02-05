@extends('games.types.gameWithBorder')

@section('css')
    <link href="{{asset('public/css/tropicalfruit.css')}}" rel=stylesheet type=text/css>
@endsection

@section('gamble')
    @include('games.parts.gamble')
@endsection
@section('help')

@component('games.parts.help')
    @slot('helpValues')
        <div data-symbols="4" class="help__prize_container"></div>
        <div data-symbols="5 0" class="help__prize_container"></div>
        <div data-symbols="7" class="help__prize_container"></div>
        <div data-symbols="6" class="help__prize_container"></div>
        <div data-symbols="3" class="help__prize_container"></div>
        <div data-symbols="2 1" class="help__prize_container"></div>
     @endslot
@endcomponent

@endsection   
@section('js')
    @parent
    <script src="{{asset('public/js/tropicalfruit_settings.js')}}"></script>
    <script src="{{asset('public/js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('TropicalFruit');
    </script>
@endsection