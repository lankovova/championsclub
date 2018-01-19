@extends('games.types.gameWithBorder')

@section('css')
    <link href="{{asset('css/beautydolphins.css')}}" rel=stylesheet type=text/css>
@endsection
    
@section('js')
    @parent
    <script src="{{asset('js/beautydolphins_settings.js')}}"></script>
    <script src="{{asset('js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('BeautyDolphins');
    </script>
@endsection