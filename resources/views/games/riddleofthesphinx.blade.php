@extends('games.types.gameWithBorder')

@section('css')
    <link href="{{asset('css/riddleofthesphinx.css')}}" rel=stylesheet type=text/css>
@endsection
    
@section('js')
    @parent
    <script src="{{asset('js/riddleofthesphinx_settings.js')}}"></script>
    <script src="{{asset('js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('RiddleOfTheSphinx');
    </script>
@endsection