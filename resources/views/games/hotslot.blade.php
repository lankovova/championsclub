@extends('games.types.gameWithBorder')

@section('css')
    <link href="{{asset('css/hotslot.css')}}" rel=stylesheet type=text/css>
@endsection
    
@section('js')
    @parent
    <script src="{{asset('js/hotslot_settings.js')}}"></script>
    <script src="{{asset('js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('HotSlot');
    </script>
@endsection