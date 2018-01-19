@extends('games.types.game')

@section('css')
    <link href="{{asset('public/css/goldenharvest.css')}}" rel=stylesheet type=text/css>
@endsection


@section('js')
    @parent
    <script src="{{asset('public/js/goldenharvest_settings.js')}}"></script>
    <script src="{{asset('public/js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('GoldenHarvest');
    </script>
@endsection
