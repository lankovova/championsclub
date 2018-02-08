@extends('games.types.gameOld')

@section('css')
    <link href="{{asset('public/css/bananasgobahamas.css')}}" rel=stylesheet type=text/css>
@endsection
    
@section('help')
    <div class="help__slide help__slide_1" id="helpSlide1">
        <div data-symbols="6" class="help__prize_container"></div>
        <div data-symbols="3" class="help__prize_container"></div>
        <div data-symbols="1 5" class="help__prize_container"></div>

        <div data-symbols="0" class="help__prize_container"></div>

        <div data-symbols="8" class="help__prize_container"></div>
        <div data-symbols="9" class="help__prize_container"></div>
        <div data-symbols="2 4" class="help__prize_container"></div>
    </div>
    <div class="help__slide help__slide_2" id="helpSlide2"></div>
@endsection

@section('js')
    @parent
    <script src="{{asset('public/js/bananasgobahamas_settings.js')}}"></script>
    <script src="{{asset('public/js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('BananasGoBahamas');
    </script>
@endsection