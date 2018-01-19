@extends('games.types.gameWithBorder')

@section('css')
    <link href="{{asset('public/css/bananas.css')}}" rel=stylesheet type=text/css>
@endsection
    
@section('js')
    @parent
    <script src="{{asset('public/js/bananas_settings.js')}}"></script>
    <script src="{{asset('public/js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('Bananas');
    </script>
@endsection