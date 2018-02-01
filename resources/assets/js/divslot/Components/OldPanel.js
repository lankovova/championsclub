import Translator from '../Translator';
import Notifier from '../Components/Notifier';
import JackpotBonus from './JackpotBonus';
import TitleValue from './TitleValue';
import OldWinField from './OldWinField';

import * as Buttons from './buttons';

export default class OldPanel {
    constructor(node, props) {
        this.node = node;
        this.props = props;

        this.btns = {
            SST: new Buttons.OldSSTBtn({
                node: document.querySelector('#SSTBtn'),
                onClick: this.props.spinStopTakeClickHandler
            }),
            betOne: new Buttons.OldBetOneBtn({
                node: document.querySelector('#betOneBtn'),
                onClick: this.props.betOneClickHandler
            }),
            maxBet: new Buttons.OldMaxBetBtn({
                node: document.querySelector('#maxBetBtn'),
                onClick: this.props.maxBetClickHandler
            }),
            auto: new Buttons.OldAutoBtn({
                node: document.querySelector('#autoBtn'),
                onClick: this.props.autoSpinClick,
                title: Translator.auto
            }),
            menu: new Buttons.OldButton({
                node: document.querySelector('#menuBtn'),
                onClick: this.props.menuClickHandler,
                title: Translator.menu
            }),
            help: new Buttons.OldButton({
                node: document.querySelector('#helpBtn'),
                onClick: this.props.helpBtnClickHandler
            }),

            // FIXME: Maybe create one component with all lines inside and only one state
            oneLine: new Buttons.OldButton({
                node: document.querySelector('#oneLinesBtn'),
                onClick: () => this.props.setLines(1)
            }),
            threeLines: new Buttons.OldButton({
                node: document.querySelector('#threeLinesBtn'),
                onClick: () => this.props.setLines(3)
            }),
            fiveLines: new Buttons.OldButton({
                node: document.querySelector('#fiveLinesBtn'),
                onClick: () => this.props.setLines(5)
            }),
            sevenLines: new Buttons.OldButton({
                node: document.querySelector('#sevenLinesBtn'),
                onClick: () => this.props.setLines(7)
            }),
            nineLines: new Buttons.OldButton({
                node: document.querySelector('#nineLinesBtn'),
                onClick: () => this.props.setLines(9)
            }),
            // FIXME: END
        };

        this.notifier = new Notifier();

        this.jb = new JackpotBonus(
            document.querySelector('#jackpotNumber'),
            document.querySelector('#bonusNumber'),
            {jValue: 7765.90, bValue: 6403.83}
        );
        // Start jackpot bonus counter
        this.jb.run();

        this.lines = new TitleValue({
            node: document.querySelector('#lines'),
            title: Translator.lines
        });
        this.betPerLine = new TitleValue({
            node: document.querySelector('#betPerLine'),
            title: Translator.betPerLine
        });
        this.denomination = new TitleValue({
            node: document.querySelector('#denomination'),
            title: Translator.credit
        });
        this.userCash = new TitleValue({
            node: document.querySelector('#userCash'),
            title: Translator.credit
        });
        this.betBlock = new TitleValue({
            node: document.querySelector('#bet'),
            title: Translator.bet
        });
        this.winBlock = new OldWinField({
            node: document.querySelector('#win')
        });
    }

    setDenomination(denom) {
        this.denomination.value = denom.toFixed(2);
    }
    setLinesAmount(lines) {
        this.lines.value = lines;
    }
    setBetPerLine(betPerLine) {
        this.betPerLine.value = betPerLine;
    }
    setUserCash({points}) {
        this.userCash.value = points;
    }
    setUserWin({points}) {
        this.winBlock.setWin(points);
    }
    setUserPreviousWin({points, kups}) {
        this.winBlock.setPreviousWin(points);
    }
    setTotalBet({points, kups}) {
        this.betBlock.value = points;
    }
    setUserInsurance() { /* Silence is gold */ }

}
