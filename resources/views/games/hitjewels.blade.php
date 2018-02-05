@extends('games.types.gameWithBorder')

@section('css')
    <link href="{{asset('public/css/hitjewels.css')}}" rel=stylesheet type=text/css>
@endsection
@section('help')

@component('games.parts.help')
    @slot('helpValues')
        <div data-symbols="7" class="help__prize_container"></div>
        <div data-symbols="5 4" class="help__prize_container"></div>
        <div data-symbols="3" class="help__prize_container"></div>
        <div data-symbols="2" class="help__prize_container"></div>
        <div data-symbols="0" class="help__prize_container"></div>
        <div data-symbols="1 6" class="help__prize_container"></div>
     @endslot
@endcomponent

@endsection      
@section('gamble')
    @include('games.parts.gamble')
@endsection

@section('js')
    @parent
    <script src="{{asset('public/js/hitjewels_settings.js')}}"></script>
    <script src="{{asset('public/js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('HitJewels');
    </script>
@endsection