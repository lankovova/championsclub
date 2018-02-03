@extends('games.types.gameOld')

@section('css')
    <link href="{{asset('public/css/columbus.css')}}" rel=stylesheet type=text/css>
@endsection
    
@section('help')

    @component('games.parts.help')
        @slot('helpValues')
            {{--  <div data-symbols="6" class="help__prize_container"></div>
            <div data-symbols="3" class="help__prize_container"></div>
            <div data-symbols="1 5" class="help__prize_container"></div>

            <div data-symbols="0" class="help__prize_container"></div>

            <div data-symbols="8" class="help__prize_container"></div>
            <div data-symbols="9" class="help__prize_container"></div>
            <div data-symbols="2 4" class="help__prize_container"></div>  --}}
        @endslot
    @endcomponent

@endsection

@section('js')
    @parent
    <script src="{{asset('public/js/columbus_settings.js')}}"></script>
    <script src="{{asset('public/js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('Columbus');
    </script>
@endsection