@extends('games.types.game')

@section('css')
    <link href="{{asset('css/kingofjewels.css')}}" rel=stylesheet type=text/css>
@endsection


@section('js')
    @parent
    <script src="{{asset('js/kingofjewels_settings.js')}}"></script>
    <script src="{{asset('js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('KingOfJewels');
    </script>
@endsection
