@extends('games.types.gameOld')

@section('css')
    <link href="{{asset('public/css/gulliver.css')}}" rel=stylesheet type=text/css>
@endsection
    
@section('help')
@component('games.parts.help')
    @slot('helpValues')
        <div data-symbols="10" class="help__prize_container"></div>
        <div data-symbols="8" class="help__prize_container"></div>
        <div data-symbols="5" class="help__prize_container"></div>
        <div data-symbols="7 11 1" class="help__prize_container"></div>
        <div data-symbols="9" class="help__prize_container"></div>
        <div data-symbols="0 6" class="help__prize_container"></div>
    @endslot
@endcomponent
@endsection 

@section('js')
    @parent
    <script src="{{asset('public/js/gulliver_settings.js')}}"></script>
    <script src="{{asset('public/js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('Gulliver');
    </script>
@endsection