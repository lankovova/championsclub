<div id="panel" class="panel">
    <div class="panel-top__container">
        <div class="toggle_block" id="linesBlock">
            <div class="toggle_block__header">
                <div class="title"></div>
            </div>
                <div class="content content--lines"></div>
            </div>

        <div class="toggle_block" id="betPerLineBlock">
            <div class="toggle_block__header">
                <div class="title"></div>
            </div>
            <div class="content content--betperline"></div>
        </div>

        <div class="toggle_block toggle_block--denom" id="denominationBlock">
            <div class="toggle_block__header">
                <div class="title"></div>
            </div>
            <div class="content content--denomination"></div>
        </div>

        <div class="toggle_block lang_block" id="languageBlock">
            <div class="toggle_block__header">
                <div class="title"></div>
            </div>
            <div class="content"></div>
        </div>
    </div>

    <div class="panel__background"></div>
    <div class="panel_row panel_row-top">
        <div class="panel-top__container">
            <!-- Menu btn -->
            <div class="menu_btn flex_center" id="menuBtn">
                <div class="title"></div>
            </div>

            <!-- Lines btn -->
            <div class="text_number_button lines_btn" id="linesBtn">
                <div class="title flex_center"></div>
                <div class="number flex_center"></div>
            </div>

            <!-- Bet per line btn -->
            <div class="text_number_button betperline_btn" id="betPerLineBtn">
                <div class="title flex_center"></div>
                <div class="number flex_center"></div>
            </div>

            <!-- Jackpot, bonus and notifier -->
            <div class="jackpot_bonus">
                <div class="text_block">
                    <div class="grid"></div>
                    <div class="jackpot text_part">
                        <div class="title" id="jackpotTitle">Jackpot</div>
                        <div class="number" id="jackpotNumber"></div>
                    </div>
                    <div class="bonus text_part">
                        <div class="title" id="bonusTitle">Bonus</div>
                        <div class="number" id="bonusNumber"></div>
                    </div>
                </div>
                <div class="notifier flex_center" id="notifier"></div>
            </div>

            <!-- Auto btn -->
            <div class="auto_btn flex_center" id="autoBtn">
                <div class="title"></div>
            </div>
        </div>
    </div>

    <div class="panel_row panel_row-bot">
        <div class="panel-bottom__container">
            <!-- Denomination btn -->
            <div class="denomination_btn flex_center" id="denominationBtn">
                <div class="text">1 <span class="title"></span>=</div>
                <div class="number"></div>
                <div class="currency">Kup</div>
            </div>

            <!-- User cash & insurance field -->
            <div class="user_cash">
                <div class="fields_wrapper">
                    <div class="field credit" id="userCash">
                        <div class="title_wrapper flex_center">
                            <div class="title"></div>
                        </div>
                        <div class="numbers">
                            <div class="points"></div>
                            <div class="kups"></div>
                        </div>
                    </div>
                    <div class="field insurance" id="userInsurance">
                        <div class="title_wrapper flex_center">
                            <div class="title"></div>
                        </div>
                        <div class="numbers">
                            <div class="points"></div>
                            <div class="kups"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tnblock tnblock_bet" id="betBlock">
                <div class="title_wrapper flex_center">
                    <div class="title"></div>
                </div>
                <div class="numbers flex_center">
                    <div class="points" id="bet_points_field"></div>
                    <div class="kups" id="bet_kups_field"></div>
                </div>
            </div>

            <!-- User win field -->
            <div class="tnblock tnblock_win" id="winBlock">
                <div class="title_wrapper flex_center">
                    <div class="title"></div>
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
                <div class="history_btn flex_center" id="serviceBtn"></div>
            </div>

            <!-- Gamble btn -->
            <div class="button button--gamble" id="gambleBtn"></div>

            <!-- Max bet btn -->
            <div class="button button--max" id="maxBetBtn"></div>

            <!-- Start btn -->
            <div class="start_btn" id="SSTBtn"></div>
        </div>
    </div>
</div>