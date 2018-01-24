@extends('base')

@section('content')
    <div id="preloader"></div>

    <div class="game_wrapper" id="game_wrapper">
        @include('games.parts.loading')
        <div id="game">
            <!-- <div class="header"></div> -->
            <div class="header">
            </div>


            <div class="main flex_center">
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

            @include('games.parts.panel')

            <div class="border-right"></div>
            <div class="border-left"></div>
        </div>
    </div>
@endsection

@section('js')
    @parent
@endsection
