import LinePresenters from '../Components/LinePresenters';
import OldPanel from '../Components/OldPanel';
import ToggleBlock from '../Components/ToggleBlock';
import ToggleLanguageBlock from '../Components/ToggleLanguageBlock';
import Alert from '../Components/Alert';
import SubstitutionBlock from './../Components/SubstitutionBlock';
import OldGambleModal from '../Components/OldGambleModal';
import Translator from '../Translator';
import CookieController from './CookieController';
import Help from './../Components/Help';

export default class OldInterfaceController {
    constructor(props) {
        this.props = props;

        // FIXME: DEV TEMP
        this._showControls();

        this.helpWindow = new Help({
            node: document.querySelector('#help'),
            onClose: this.onCloseHelp
        });

        this.linePresenters = new LinePresenters({
            lines: this.props.lines,
            containerNode: this.props.containerNode
        });

        this.gambleModal = new OldGambleModal({
            node: document.querySelector('#gamble'),
            pickSuit: this.pickSuit,
            gambleReadyToPick: this.gambleReadyToPick,
            gambleOver: this.gambleOver,
            gambleWin: this.props.gambleWin,
            gambleLose: this.props.gambleLose,
            disablePanelGambleBtns: this.disablePanelGambleBtns,
            enablePanelGambleBtns: this.enablePanelGambleBtns
        });

        this.alertWindow = new Alert({node: document.querySelector('#alert')});

        this.substitutionBlock = new SubstitutionBlock({node: document.querySelector('#substitutionBlock')});

        this.panel = new OldPanel(document.querySelector('#panel'), {
            setLines: this.setLines,
            spinStopTakeClickHandler: this.spinStopTakeClickHandler,
            betOneClickHandler: this.betOneClickHandler,
            maxBetClickHandler: this.maxBetClickHandler,
            autoSpinClick: this.autoSpinClick,
            helpBtnClickHandler: this.openHelp,
            menuClickHandler: () => window.location.href = "/"
        });

        // Init handler on keyboard actions
        this._initKeyboardListeners();
    }

    _showControls() {
        console.log(
        `Controls:
            space - Spin
            < - Increase lines
            > - Increase bet per line
            m - Set max bet
            Esc - Menu`
        );
    }

    setLines = (linesAmount) => {
        // Check if user able to change lines amount
        if (this.panel.btns.lines.state) {
            this.props.setLines(linesAmount);
        }
    }

    setBetPerLine = () => {
        if (this.panel.btns.betOne.state.betOne) {
            this.props.setBetPerLine();
        }
    }

    spinStopTakeClickHandler = () => {
        if (this.panel.btns.SST.state.spin) {
            this.props.spinReels();
        } else if (this.panel.btns.SST.state.stop) {
            this.props.stopReels();
        } else if (this.panel.btns.SST.state.takeWin) {
            this.props.takeWin();
        } else if (this.panel.btns.SST.state.speedUpTakeWin) {
            this.props.speedUpTakeWin();
        }
    }

    betOneClickHandler = () => {
        if (this.panel.btns.betOne.state.betOne) {
            this.props.setBetPerLine();
        } else if (this.panel.btns.betOne.state.double) {
            this.props.startGamble();
        } else if (this.panel.btns.betOne.state.red) {
            this.pickSuit('red')();
        }
    }

    maxBetClickHandler = () => {
        if (this.panel.btns.maxBet.state.maxBet) {
            this.props.setMaxBet();
        } else if (this.panel.btns.maxBet.state.black) {
            this.pickSuit('black')();
        }
    }

    autoSpinClick = () => {
        if (this.panel.btns.auto.state) {
            if (!this.panel.btns.auto.isOn) {
                this.props.startAutoSpin();
            } else {
                this.props.stopAutoSpin();
            }
            this.panel.btns.auto.isOn = !this.panel.btns.auto.isOn;
        }
    }

    showAlert = (alertText) => {
        this.alertWindow.text = alertText;
        this.alertWindow.show();
    }

    hideAlert = () => {
        this.alertWindow.hide();
    }

    enableSpin = () => this.panel.btns.SST.enable('spin');
    disableSpin = () => this.panel.btns.SST.state.spin = false;

    enableGamble = () => {
        this.panel.btns.betOne.enable('double');
    }

    enableAuto = () => this.panel.btns.auto.state = true;
    disableAuto = () => this.panel.btns.auto.state = false;

    disablePanelGambleBtns = () => {
        // TODO: Test
        this.panel.btns.betOne.disable();
        this.panel.btns.maxBet.disable();
    }
    enablePanelGambleBtns = () => {
        // TODO: Test
        this.panel.btns.betOne.enable('red');
        this.panel.btns.maxBet.enable('black');
    }

    enableSpinAndAuto = () => {
        this.enableSpin();
        this.enableAuto();
    }
    disableSpinAndAuto = () => {
        this.disableSpin();
        this.disableAuto();
    }

    enableStop = () => this.panel.btns.SST.enable('stop');
    disableStop = () => this.panel.btns.SST.state.stop = false;

    enableTakeWin = () => this.panel.btns.SST.enable('takeWin');
    disableTakeWin = () => this.panel.btns.SST.state.takeWin = false;

    enableSpeedUpTransferWin = () => this.panel.btns.SST.enable('speedUpTakeWin');
    disableSpeedUpTransferWin = () => this.panel.btns.SST.state.speedUpTakeWin = false;

    setIdle = () => {
        this.enableInterface();

        this.panel.btns.SST.enable('spin');
        this.panel.btns.betOne.enable('betOne');
        this.panel.btns.maxBet.enable('maxBet');
    }

    setTakeWin = () => {
        this.disableInterface();

        this.enableTakeWin();
        this.enableGamble();
    }

    setGamble(userWinPoints) {
        // Disable whole interface
        this.disableInterface();

        // Show modal
        this.gambleModal.start(userWinPoints);
    }

    gambleReadyToPick = () => {
        this.disableInterface();

        // Enable red/black buttons instead of gamble/max
        this.enablePanelGambleBtns();

        // Enable take win posibillity
        this.enableTakeWin();

        this.panel.notifier.text = Translator.gambleChoose;
    }

    gambleOver = () => {
        this.gambleModal.hide();
        this.setIdle();

        // FIXME: Write correct notifier text based on setSpinPossibility answer
        this.panel.notifier.text = Translator.gambleOver;
        this.props.setSpinPossibility();
    }

    /**
     * Pick gamble card with state check based on card suit
     * @param {String} suit Name of card suit
     * @returns Returns function wich will pick gamble card
     */
    pickSuit = (suit) => {
        return () => {
            console.log(suit);
            if (this.gambleModal.btns[suit].state) {
                // Disable take btn
                this.disableTakeWin();

                this.gambleModal.pickCard(suit);
            }
        }
    }

    // Disable each btn of panel btns
    disableInterface = () => {
        Object.keys(this.panel.btns).forEach(btnKey => this.panel.btns[btnKey].disable());
    }

    // Enable each btn of panel except buttons with multiple states(gamble, maxbet, sst)
    enableInterface() {
        Object.keys(this.panel.btns).forEach(btnKey => this.panel.btns[btnKey].enable());
    }

    /**
     * Triggers when lines amount was changed
     */
    onSetLine = (linesAmount, betPerLine) => {
        // Update panel value
        this.panel.setLinesAmount(linesAmount);
        // Update line presenters text
        this.linePresenters.setText(linesAmount, betPerLine);
        // Update help paytables
        this.helpWindow.refreshPaytable(linesAmount, betPerLine);
        // Notify lines btns component to highlight appropriate line btn
        this.panel.btns.lines.highlightAppropriateBtn(linesAmount);
    }

    /**
     * Triggers when bet per line was changed
     */
    onSetBetPerLine = (linesAmount, betPerLine) => {
        // Update panel value
        this.panel.setBetPerLine(betPerLine);
        // Update line presenters text
        this.linePresenters.setText(linesAmount, betPerLine);
        // Update help paytables
        this.helpWindow.refreshPaytable(linesAmount, betPerLine);
    }

    /**
     * Triggers when denomination was changed
     */
    onSetDenomination = (denomination) => {
        this.panel.setDenomination(denomination);
    }

    openHelp = () => {
        this.disableInterface();
        this.helpWindow.open();
    }

    onCloseHelp = () => {
        this.setIdle();
        this.props.setSpinPossibility();
    }

    displaySubstitutionStart() {
        this.substitutionBlock.show();
    }

    hideAndResetSubstitutionBlock() {
        this.substitutionBlock.hide();

        // Change header background to default
        document.querySelector('#header').style.backgroundImage = '';
    }

    async animateRandomizingSubstitutionSymbol(substitutionSymbol) {
        // Wait for randomizing animation to end
        await this.substitutionBlock.startRandomizing(substitutionSymbol);

        // Change header background to substitution
        document.querySelector('#header').style.backgroundImage = `url('${settings.imagesPath}substitution/substitutionHeader.png')`;
        // Hide alert
        this.hideAlert();

        // Wait for symbol to move to his finish position
        await this.substitutionBlock.moveSymbolToFinishPos();

        // Resolve after full animation is complete
        return new Promise(resolve => resolve());
    }

    _initKeyboardListeners() {
        window.onkeydown = (event) => {
            var keyCode = event.which || event.keyCode;

            switch (keyCode) {
                case 32: // Space
                    this.spinStopTakeClickHandler();
                    break;
                case 188: // <
                    this.setLines();
                    break;
                case 190: // >
                    this.setBetPerLine();
                    break;
                case 77: // m
                    this.maxBetClickHandler();
                    break;
                case 27: // ESC
                    this.panel.btns.menu.onClick();
                    break;
                default: {}
            }
        }
    }

}
