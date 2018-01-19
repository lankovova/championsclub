@extends('base')

@section('content')
    <div id="preloader"></div>
    <div class="game_wrapper" id="game_wrapper">
        <div id="loading">
            <div class="loading__container">
                <div class="loading__text">please wait. loading <span id="loading__persent">100.00</span> %</div>
                <div id="loading__block"></div>
            </div>
        </div>
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

            <div id="panel" class="panel">
                <div class="panel-top__container">
                    <div class="toggle_block" id="linesBlock">
                        <div class="toggle_block__header"></div>
                            <div class="content content--lines"></div>
                        </div>

                    <div class="toggle_block" id="betPerLineBlock">
                        <div class="toggle_block__header"></div>
                        <div class="content content--betperline"></div>
                    </div>

                    <div class="toggle_block toggle_block--denom" id="denominationBlock">
                        <div class="toggle_block__header"></div>
                        <div class="content content--denomination"></div>
                    </div>

                    <div class="toggle_block lang_block" id="languageBlock">
                        <div class="toggle_block__header"></div>
                        <div class="content"></div>
                    </div>
                </div>
                <div class="panel_row panel_row-top">
                    <div class="panel-top__container">
                        <!-- Menu btn -->
                        <div class="menu_btn flex_center" id="menuBtn">Menu</div>

                        <!-- Lines btn -->
                        <div class="text_number_button lines_btn" id="linesBtn">
                            <div class="title flex_center">Lines</div>
                            <div class="number flex_center" id="linesAmountField"></div>
                        </div>

                        <!-- Bet per line btn -->
                        <div class="text_number_button betperline_btn" id="betPerLineBtn">
                            <div class="title flex_center">
                                Bet/Line
                            </div>
                            <div class="number flex_center" id="betperlineAmountField"></div>
                        </div>

                        <!-- Jackpot, bonus and notifier -->
                        <div class="jackpot_bonus">
                            <div class="text_block">
                                <div class="grid"></div>
                                <div class="jackpot text_part">
                                    <div class="title" id="jackpotTitle">Jackpot</div>
                                    <div class="number" id="jackpotNumber">7765.90</div>
                                </div>
                                <div class="bonus text_part">
                                    <div class="title" id="bonusTitle">Bonus</div>
                                    <div class="number" id="bonusNumber">6403.83</div>
                                </div>
                            </div>
                            <div class="notifier flex_center" id="notifier"></div>
                        </div>

                        <!-- Auto btn -->
                        <div class="auto_btn flex_center" id="autoBtn">Auto</div>
                    </div>
                </div>

                <div class="panel_row panel_row-bot">
                    <div class="panel-bottom__container">
                        <!-- Denomination btn -->
                        <div class="denomination_btn flex_center" id="denominationBtn">
                            <div class="text">1 credit=</div>
                            <div class="number" id="denominationAmountField"></div>
                            <div class="currency">Kup</div>
                        </div>

                        <!-- User cash & insurance field -->
                        <div class="user_cash">
                            <div class="fields_wrapper">
                                <div class="field credit">
                                    <div class="title_wrapper flex_center">
                                        <div class="title">Credit</div>
                                    </div>
                                    <div class="numbers">
                                        <div class="points" id="userCashPointsField"></div>
                                        <div class="kups" id="userCashKupsField"></div>
                                    </div>
                                </div>
                                <div class="field insurance">
                                    <div class="title_wrapper flex_center">
                                            <div class="title">Insurance</div>
                                        </div>
                                    <div class="numbers">
                                        <div class="points" id="userInsurancePointsField">1000</div>
                                        <div class="kups" id="userInsuranceKupsField">10.15 Kup</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tnblock tnblock_bet" id="betBlock">
                            <div class="title_wrapper flex_center">
                                <div class="title">Bet</div>
                            </div>
                            <div class="numbers flex_center">
                                <div class="points" id="bet_points_field"></div>
                                <div class="kups" id="bet_kups_field"></div>
                            </div>
                        </div>

                        <!-- User win field -->
                        <div class="tnblock tnblock_win" id="winBlock">
                            <div class="title_wrapper flex_center">
                                <div class="title">Win</div>
                            </div>
                            <div class="numbers flex_center">
                                <div class="points" id="win_points_field"></div>
                                <div class="kups" id="win_kups_field"></div>
                            </div>
                        </div>

                        <!-- Lang, help and history btns -->
                        <div class="lhh_panel">
                            <div class="language_btn" id="languageBtn"></div>
                            <div class="help_btn" id="helpBtn"></div>
                            <div class="history_btn flex_center" id="historyBtn">Service</div>
                        </div>

                        <!-- Gamble btn -->
                        <div class="button button--gamble" id="gambleBtn">Gamble</div>

                        <!-- Max bet btn -->
                        <div class="button button--max" id="maxBetBtn">Max</div>

                        <!-- Start btn -->
                        <div class="start_btn" id="SSTBtn">Start</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('js')
    @parent
@endsection