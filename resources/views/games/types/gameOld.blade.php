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
                <div class="jackpot">
                    <div class="jackpot_text">jackpot:</div>
                    <div class="jackpot_amount" id="jackpotNumber">6.234,34</div>
                </div>
                <div class="bonus">
                    <div class="bonus_text">bonus:</div>
                    <div class="bonus_amount" id="bonusNumber">6.234,34</div>
                </div>
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
                @include('games.parts.gamble')
            @show

            <div class="panel">

                <div class="notifier" id="notifier"></div>

                <div id="userCash">
                    <div class="credit_text title"></div>
                    <div class="credit_amount value"></div>
                </div>

                <div class="win" id="win">
                    <div class="win__text title"></div>
                    <div class="win__value value"></div>
                </div>

                <div class="denomination" id="denomination">
                    <div class="denomination__header">1 <span class="title"></span>=</div>
                    <div class="denomination__value value"></div>
                </div>

                <div id="betPerLine">
                    <div class="bet_per_line_text title"></div>
                    <div class="bet_per_line_amount value"></div>
                </div>

                <div id="lines">
                    <div class="lines_amount_text title"></div>
                    <div class="lines_amount value"></div>
                </div>

                <div id="bet">
                    <div class="bet_text title"></div>
                    <div class="bet_amount value"></div>
                </div>

                <div class="cash_out_btn" id="cashOutBtn"></div>
                <div class="info_btn" id="helpBtn"></div>
                <div class="auto_btn" id="autoBtn"></div>
                <div class="exit_btn" id="menuBtn"></div>

                <div id="linesBtns">
                    <div data-value="1" class="lines_btn one_lines_btn"></div>
                    <div data-value="3" class="lines_btn three_lines_btn"></div>
                    <div data-value="5" class="lines_btn five_lines_btn"></div>
                    <div data-value="7" class="lines_btn sevens_lines_btn"></div>
                    <div data-value="9" class="lines_btn nine_lines_btn"></div>
                </div>

                <div class="bet_btn" id="betOneBtn"></div>
                <div class="maxbet_btn" id="maxBetBtn"></div>
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
