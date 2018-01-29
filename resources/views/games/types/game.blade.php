@extends('base')

@section('content')
    <div id="preloader"></div>
    <div class="game_wrapper" id="game_wrapper">
        @yield('help')
        @include('games.parts.loading')
        <div id="game">
            <div class="substitutionBlock-wrapper start" id="substitutionBlock">
                <div class="substitutionBlock">
                    <div class="substitutionSymbol-container">
                        <div class="substitutionSymbol" id="substitutionSymbol"></div>
                    </div>
                    <div class="substitutionPaytable-container">
                        <div class="substitutionPaytable" id="substitutionPaytable"></div>
                    </div>
                </div>
            </div>

            <div class="header" id="header"></div>

            <div class="main flex_center">
                <div class="alert" id="alert">
                    <div class="content flex_center"></div>
                </div>
                <div id="reels_wrapper" class="reels_wrapper"></div>
            </div>

            @section('gamble')
                @include('games.parts.gambleExtended')
            @show

            @include('games.parts.panel')
        </div>
    </div>
@endsection

@section('js')
    @parent
@endsection
