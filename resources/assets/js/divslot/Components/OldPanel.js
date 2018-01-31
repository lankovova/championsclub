import Translator from '../Translator';
import Notifier from '../Components/Notifier';
import JackpotBonus from './JackpotBonus';

import TNWinBlock from './TNWinBlock';
import * as Buttons from './buttons';
import TNBlock from './TNBlock';

export default class OldPanel {
    constructor(node, props) {
        this.node = node;
        this.props = props;

        this.btns = {
            SST: new Buttons.SSTBtn({
                node: document.querySelector('#SSTBtn'),
                onClick: this.props.spinStopTake
            }),
            // TODO: BetOne(Simple bet increase) + Gamble + Red
            // gamble: new Buttons.GambleBtn({
            //     node: document.querySelector('#gambleBtn'),
            //     onClick: this.props.gambleClick
            // })
            // TODO: MaxBet + Black
            // maxBet: new Buttons.MaxBetBtn({
            //     node: document.querySelector('#maxBetBtn'),
            //     onClick: this.props.maxBetClickHandler
            // }),
            // TODO: 5 separate buttons with static lines amount on them
            // lines: new Buttons.ButtonWithNumber({
            //     node: document.querySelector('#linesBtn'),
            //     onClick: this.props.toggleLinesBlock,
            //     title: Translator.lines
            // }),
            auto: new Buttons.AutoBtn({
                node: document.querySelector('#autoBtn'),
                onClick: this.props.autoSpinClick,
                title: Translator.auto
            }),
            menu: new Buttons.Button({
                node: document.querySelector('#menuBtn'),
                onClick: this.props.menuClickHandler,
                title: Translator.menu
            }),
            help: new Buttons.Button({
                node: document.querySelector('#helpBtn'),
                onClick: this.props.helpBtnClickHandler
            }),
        };

        // TODO: Add CashOutButton

        this.notifier = new Notifier();

        this.jb = new JackpotBonus(
            document.querySelector('#jackpotNumber'),
            document.querySelector('#bonusNumber'),
            {jValue: 7765.90, bValue: 6403.83}
        );
        // Start jackpot bonus counter
        this.jb.run();

        // FIXME: Only one points field
        this.userCashFields = new function() {
            this.node = document.querySelector('#userCash');
            this.title = this.node.querySelector('.title');
            this.points = this.node.querySelector('.points');
            this.kups = this.node.querySelector('.kups');

            this.title.innerText = Translator.credit;
        };
        this.betBlock = new TNBlock({
            node: document.querySelector('#betBlock'),
            title: Translator.bet
        });
        this.winBlock = new TNWinBlock({
            node: document.querySelector('#winBlock')
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
        this.userInsurance.points.innerText = points;
        this.userInsurance.kups.innerText = `${kups.toFixed(2)} Kup`;
    }

    setUserWin({points, kups}) {
        this.winBlock.setWin({points, kups});
    }
    setUserPreviousWin({points, kups}) {
        this.winBlock.setPreviousWin({points, kups});
    }

    setTotalBet({points, kups}) {
        this.betBlock.setValues({points, kups});
    }

}
