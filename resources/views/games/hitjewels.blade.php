@extends('games.types.gameWithBorder')

@section('css')
    <link href="{{asset('css/hitjewels.css')}}" rel=stylesheet type=text/css>
@endsection
    
@section('js')
    @parent
    <script src="{{asset('js/hitjewels_settings.js')}}"></script>
    <script src="{{asset('js/game.js')}}"></script>
    <script>
        var game = new divSlot.Game('HitJewels');
    </script>
@endsection