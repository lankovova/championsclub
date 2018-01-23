@extends('base')

@section('content')
    <div id="preloader"></div>
    <div class="game_wrapper" id="game_wrapper">
        {{--  @include('games.parts.loading')  --}}
        <div id="game">
            <div class="jackpot-bonus">

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

				<div class="button__suit-color button__red" id="red">red</div>
				<div class="button__suit-color button__black" id="black">black</div>
				<div class="button__suit button__spade" id="spade"></div>
				<div class="button__suit button__club" id="club"></div>
				<div class="button__suit button__heart" id="heart"></div>
				<div class="button__suit button__diamond" id="diamond"></div>

				<div class="card" id="card"></div>
				<div class="card__suit card__spade" id="suitSpade"></div>
				<div class="card__suit card__club" id="suitClub"></div>
				<div class="card__suit card__heart" id="suitHeart"></div>
				<div class="card__suit card__diamond" id="suitdiamond"></div>
				<div class="previous-cards" id="previous-cards">
					<div class="previous-cards__text">previous cards</div>
					<div class="previous-cards__suits" id="previousCardsSuits"></div>
				</div>
			</div>

            <div class="panel">
                <div class="lines_btn one_lines_btn" id="oneLinesBtn"></div>
                <div class="lines_btn three_lines_btn" id="threeLinesBtn"></div>
                <div class="lines_btn five_lines_btn" id="fiveLinesBtn"></div>
                <div class="lines_btn sevens_lines_btn" id="sevensLinesBtn"></div>
                <div class="lines_btn nine_lines_btn" id="nineLinesBtn"></div>
            </div>

            <div class="border-left"></div>
            <div class="border-right"></div>
        </div>
    </div>
@endsection

@section('js')
    @parent
@endsection