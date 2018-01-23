@extends('games.types.gameOld')

@section('css')
    <link href="{{asset('public/css/bananasgobahamas.css')}}" rel=stylesheet type=text/css>
@endsection
    
@section('js')
    @parent
    <script src="{{asset('public/js/bananasgobahamas_settings.js')}}"></script>
    <script src="{{asset('public/js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('BananasGoBahamas');
    </script>
@endsection