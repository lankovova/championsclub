@extends('base')

@section('content')
    <div id="preloader"></div>
    <div class="game_wrapper" id="game_wrapper">
        {{--  @include('games.parts.loading')  --}}
        <div id="game">
            <div class="jackpot-bonus">
                <div class="jackpot_text"></div>
                <div class="jackpot_amount"></div>
                <div class="bonus_text"></div>
                <div class="bonus_amount"></div>
                <div class="grid"></div>
            </div>


            <div class="main flex_center">
                    <div class="header">
                        </div>
                <div class="alert" id="alert">
                    <div class="content flex_center"></div>
                </div>
                <div id="reels_wrapper" class="reels_wrapper"></div>
            </div>

			<div class="gamble" id="gamble">
				<div class="gamble__amount">
					<div class="gamble__amount-text">gamble amount</div>
					<div class="gamble__amount-value" id="gameAmountValue"></div>
				</div>

				<div class="gamble__to-win">
					<div class="gamble__to-win-suit">
						suit gamble to win
						<span id="gambleToWinSuit"></span>
						(x4)
					</div>
					<div class="gamble__to-win-color">
						color gamble to win
						<span id="gambleToWinColor"></span>
						(x2)
					</div>
				</div>

				<div class="button__suit-color button__red" id="red">
                    <div class="overflow-layer">red</div>
                </div>
                <div class="button__suit-color button__black" id="black">
                    <div class="overflow-layer">black</div>
                </div>
                <div class="button__suit button__spade" id="spade">
                    <div class="overflow-layer"></div>
                </div>
                <div class="button__suit button__club" id="club">
                    <div class="overflow-layer"></div>
                </div>
                <div class="button__suit button__heart" id="heart">
                    <div class="overflow-layer"></div>
                </div>
                <div class="button__suit button__diamond" id="diamond">
                    <div class="overflow-layer"></div>
                </div>

				<div class="card" id="card"></div>
				<div class="card__suit card__spade" id="suitSpade"></div>
				<div class="card__suit card__club" id="suitClub"></div>
				<div class="card__suit card__heart" id="suitHeart"></div>
				<div class="card__suit card__diamond" id="suitDiamond"></div>
				<div class="previous-cards" id="previous-cards">
					<div class="previous-cards__text">previous cards</div>
					<div class="previous-cards__suits" id="previousCardsSuits"></div>
				</div>
			</div>

            <div class="panel">

                <div class="notifier" id="notifier">game over, place your bet</div>

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
