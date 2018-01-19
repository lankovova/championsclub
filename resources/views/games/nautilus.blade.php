@extends('games.types.game')

@section('css')
    <link href="{{asset('public/css/nautilus.css')}}" rel=stylesheet type=text/css>
@endsection


@section('js')
    @parent
    <script src="{{asset('public/js/nautilus_settings.js')}}"></script>
    <script src="{{asset('public/js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('Nautilus');
    </script>
@endsection
