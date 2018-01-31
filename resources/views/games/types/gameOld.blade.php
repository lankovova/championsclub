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

            <div class="jackpot-bonus">
                <div class="jackpot_text"></div>
                <div class="jackpot_amount"></div>
                <div class="bonus_text"></div>
                <div class="bonus_amount"></div>
                <div class="grid"></div>
            </div>


            <div class="main flex_center">
                <div class="header" id="header"></div>
                <div class="alert" id="alert">
                    <div class="content flex_center"></div>
                </div>
                <div id="reels_wrapper" class="reels_wrapper"></div>
            </div>

            @section('gamble')
                @include('games.parts.gambleExtended')
            @show

            <div class="panel">

                <div class="notifier" id="notifier">game over</div>

                <div class="credit_text">credit</div>
                <div class="credit_amount" id="creditAmount">100</div>

                <div class="denomination"></div>

                <div class="bet_per_line_text">bet/line</div>
                <div class="bet_per_line_amount" id="betPerLineAmount">1</div>

                <div class="lines_amount_text">lines bet</div>
                <div class="lines_amount" id="linesAmount">1</div>

                <div class="bet_text">1</div>
                <div class="bet_amount" id="betAmount">1</div>


                <div class="cash_out_btn" id="cashOutBtn"></div>
                <div class="info_btn" id="infoBtn"></div>
                <div class="auto_btn" id="autoBtn"></div>
                <div class="exit_btn" id="exitBtn"></div>

                <div class="lines_btn one_lines_btn" id="oneLinesBtn"></div>
                <div class="lines_btn three_lines_btn" id="threeLinesBtn"></div>
                <div class="lines_btn five_lines_btn" id="fiveLinesBtn"></div>
                <div class="lines_btn sevens_lines_btn" id="sevensLinesBtn"></div>
                <div class="lines_btn nine_lines_btn" id="nineLinesBtn"></div>

                <div class="bet_btn" id="betBtn"></div>
                <div class="maxbet_btn" id="maxbetBtn"></div>
                <div class="start_btn" id="spinBtn"></div>
            </div>

            <div class="border-left"></div>
            <div class="border-right"></div>
        </div>
    </div>
@endsection

@section('js')
    @parent
@endsection
