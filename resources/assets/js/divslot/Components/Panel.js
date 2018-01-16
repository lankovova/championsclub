import Notifier from '../Components/Notifier';
import JackpotBonus from './JackpotBonus';
import * as Buttons from './buttons';

class Panel {
    constructor(node, props) {
        this.node = node;
        this.props = props;

        this.btns = {
            SST: new Buttons.SSTBtn({
                node: document.querySelector('#SSTBtn'),
                spinStopTake: this.props.spinStopTake
            }),
            maxBet: new Buttons.MaxBetBtn({
                node: document.querySelector('#maxBetBtn'),
                setMaxBet: this.props.setMaxBet
            }),
            lines: new Buttons.LinesBtn({
                node: document.querySelector('#linesBtn'),
                toggleLinesBlock: this.props.toggleLinesBlock
            }),
            betPerLine: new Buttons.BetPerLineBtn({
                node: document.querySelector('#betPerLineBtn'),
                toggleBetPerLineBlock: this.props.toggleBetPerLineBlock
            }),
            denomination: new Buttons.DenominationBtn({
                node: document.querySelector('#denominationBtn'),
                toggleDenominationBlock: this.props.toggleDenominationBlock
            }),
            menu: new Buttons.MenuBtn({node: document.querySelector('#menuBtn')}),
            gamble: new Buttons.GambleBtn({node: document.querySelector('#gambleBtn')}),
            auto: new Buttons.AutoBtn({node: document.querySelector('#autoBtn')}),
            language: new Buttons.LanguageBtn({
                node: document.querySelector('#languageBtn'),
                toggleLanguageBlock: this.props.toggleLanguageBlock
            })
        };

        this.notifier = new Notifier();

        this.jb = new JackpotBonus(
            document.querySelector('#jackpotNumber'),
            document.querySelector('#bonusNumber'),
            {jValue: 7765.90, bValue: 6403.83}
        );
        // Start jackpot bonus counter
        this.jb.run();

        this.linesAmountField = document.querySelector('#linesAmountField');
        this.betPerLineAmountField = document.querySelector('#betperlineAmountField');
        this.denominationAmountField = document.querySelector('#denominationAmountField');

        this.userCashFields = {
            points: document.querySelector('#userCashPointsField'),
            kups: document.querySelector('#userCashKupsField')
        };
        this.userInsuranceFields = {
            points: document.querySelector('#userInsurancePointsField'),
            kups: document.querySelector('#userInsuranceKupsField')
        };
        this.totalBetFields = {
            points: document.querySelector('#bet_points_field'),
            kups: document.querySelector('#bet_kups_field'),
        };
        this.userWinFields = {
            points: document.querySelector('#win_points_field'),
            kups: document.querySelector('#win_kups_field'),
        };

        // TEMP
        this.setUserInsurance({
            points: 1000,
            kups: 10.00
        });
    }

    setDenomination(denom) {
        this.btns.denomination.number = denom.toFixed(2);
    }
    setLinesAmount(lines) {
        this.btns.lines.number = lines;
    }
    setBetPerLine(betPerLine) {
        this.btns.betPerLine.number = betPerLine;
    }

    setUserCash({points, kups}) {
        this.userCashFields.points.innerText = points;
        this.userCashFields.kups.innerText = `${kups.toFixed(2)} Kup`;
    }
    setUserInsurance({points, kups}) {
        this.userInsuranceFields.points.innerText = points;
        this.userInsuranceFields.kups.innerText = `${kups.toFixed(2)} Kup`;
    }

    setUserWin({points, kups}) {
        this.userWinFields.points.innerText = points;
        this.userWinFields.kups.innerText = `${kups.toFixed(2)} Kup`;
    }
    setTotalBet({points, kups}) {
        this.totalBetFields.points.innerText = points;
        this.totalBetFields.kups.innerText = `${kups.toFixed(2)} Kup`;
    }

}

export default Panel;
