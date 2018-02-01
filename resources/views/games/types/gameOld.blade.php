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
                <div class="jackpot_amount" id="jackpotNumber"></div>
                <div class="bonus_text"></div>
                <div class="bonus_amount" id="bonusNumber"></div>
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

                <div id="userCash">
                    <div class="credit_text title">credit</div>
                    <div class="credit_amount points">100</div>
                </div>

                <div class="denomination" id="denomination">
                    <div class="denomination__header">1 <span class="title">credit</span>=</div>
                    <div class="denomination__value">
                        <div class="value">0.0.1</div>
                    </div>
                </div>

                <div id="betPerLine">
                    <div class="bet_per_line_text title">bet/line</div>
                    <div class="bet_per_line_amount value">1</div>
                </div>

                <div id="lines">
                    <div class="lines_amount_text title">lines bet</div>
                    <div class="lines_amount value">1</div>
                </div>

                <div id="bet">
                    <div class="bet_text title">bet</div>
                    <div class="bet_amount value">1</div>
                </div>

                <div class="cash_out_btn" id="cashOutBtn"></div>
                <div class="info_btn" id="helpBtn"></div>
                <div class="auto_btn" id="autoBtn"></div>
                <div class="exit_btn" id="menuBtn"></div>

                <div class="lines_btn one_lines_btn" id="oneLinesBtn"></div>
                <div class="lines_btn three_lines_btn" id="threeLinesBtn"></div>
                <div class="lines_btn five_lines_btn" id="fiveLinesBtn"></div>
                <div class="lines_btn sevens_lines_btn" id="sevensLinesBtn"></div>
                <div class="lines_btn nine_lines_btn" id="nineLinesBtn"></div>

                <div class="bet_btn" id="betBtn"></div>
                <div class="maxbet_btn" id="maxbetBtn"></div>
                <div class="start_btn" id="SSTBtn"></div>
            </div>

            <div class="border-left"></div>
            <div class="border-right"></div>
        </div>
    </div>
@endsection

@section('js')
    @parent
@endsection
