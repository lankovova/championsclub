@extends('games.types.gameWithBorder')

@section('css')
    <link href="{{asset('public/css/pepperseven.css')}}" rel=stylesheet type=text/css>
@endsection
    
@section('js')
    @parent
    <script src="{{asset('public/js/pepperseven_settings.js')}}"></script>
    <script src="{{asset('public/js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('PepperSeven');
    </script>
@endsection