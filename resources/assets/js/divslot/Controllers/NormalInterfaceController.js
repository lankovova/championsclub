import LinePresenters from '../Components/LinePresenters';
import Panel from '../Components/Panel';
import ToggleBlock from '../Components/ToggleBlock';
import ToggleLanguageBlock from '../Components/ToggleLanguageBlock';
import Alert from '../Components/Alert';
import SubstitutionBlock from './../Components/SubstitutionBlock';
import GambleModal from '../Components/GambleModal';
import Translator from '../Translator';
import CookieController from './CookieController';
import Help from './../Components/Help';

export default class NormalInterfaceController {
    constructor(props) {
        this.props = props;

        this.helpWindow = new Help({
            node: document.querySelector('#help'),
            onClose: this.onCloseHelp
        });

        this.linePresenters = new LinePresenters({
            lines: this.props.lines,
            containerNode: this.props.containerNode
        });

        this.gambleModal = new GambleModal({
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

        this.panel = new Panel(document.querySelector('#panel'), {
            spinStopTake: this.spinStopTake,
            autoSpinClick: this.autoSpinClick,
            maxBetClickHandler: this.maxBetClickHandler,
            gambleClick: this.gambleClick,
            helpBtnClickHandler: this.openHelp,
            toggleLinesBlock: () => this.linesBlock.toggle(),
            toggleBetPerLineBlock: () => this.betPerLineBlock.toggle(),
            toggleDenominationBlock: () => this.denominationBlock.toggle(),
            toggleLanguageBlock: () => this.langBlock.toggle(),
            menuClickHandler: () => window.location.href = "/"
        });

        // Init toggling blocks like lines, betPerLine, denomination and language
        this._initTogglingBlocks();

        // Init handler on keyboard actions
        this._initKeyboardListeners();
    }

    // TODO: Move state into component in multi state component
    spinStopTake = () => {
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

    maxBetClickHandler = () => {
        if (this.panel.btns.maxBet.state.maxbet) {
            this.props.setMaxBet();
        } else if (this.panel.btns.maxBet.state.black) {
            this.pickSuit('black')();
        }
    }

    gambleClick = () => {
        if (this.panel.btns.gamble.state.gamble) {
            this.props.startGamble();
        } else if (this.panel.btns.gamble.state.red) {
            this.pickSuit('red')();
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

    enableGamble = () => this.panel.btns.gamble.enable('gamble');

    enableAuto = () => this.panel.btns.auto.state = true;
    disableAuto = () => this.panel.btns.auto.state = false;

    disablePanelGambleBtns = () => {
        this.panel.btns.gamble.disable();
        this.panel.btns.maxBet.disable();
    }
    enablePanelGambleBtns = () => {
        this.panel.btns.gamble.enable('red');
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

        this.panel.btns.gamble.disable();
        this.panel.btns.SST.enable('spin');
        this.panel.btns.maxBet.enable('maxbet');
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

        this.panel.notifier.text = Translator.get('gambleChoose');
    }

    gambleOver = () => {
        this.gambleModal.hide();
        this.setIdle();

        // FIXME: Write correct notifier text based on setSpinPossibility answer
        this.panel.notifier.text = Translator.get('gambleOver');
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
     * Triggered when lines amount was changed
     */
    onSetLine = (linesAmount, betPerLine) => {
        this.linesBlock.highlightItem(linesAmount);
        // Update panel value
        this.panel.setLinesAmount(linesAmount);
        // Update line presenters text
        this.linePresenters.setText(linesAmount, betPerLine);
        // Update help paytables
        this.helpWindow.refreshPaytable(linesAmount, betPerLine);
    }

    /**
     * Triggered when bet per line was changed
     */
    onSetBetPerLine = (linesAmount, betPerLine) => {
        this.betPerLineBlock.highlightItem(betPerLine);
        // Update panel value
        this.panel.setBetPerLine(betPerLine);
        // Update line presenters text
        this.linePresenters.setText(linesAmount, betPerLine);
        // Update help paytables
        this.helpWindow.refreshPaytable(linesAmount, betPerLine);
    }

    /**
     * Triggered when denomination was changed
     */
    onSetDenomination = (denomination) => {
        this.denominationBlock.highlightItem(denomination);
        // Update panel value
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

    setLanguage = (value) => {
        // Set new lang to cookies
        CookieController.set('lang', value);
        // Reload page from cache
        window.location.reload(false);
    }

    _initKeyboardListeners() {
        window.onkeydown = (event) => {
            var keyCode = event.which || event.keyCode;

            switch (keyCode) {
                case 32: // Space
                    this.spinStopTake();
                    break;
                case 68: // d
                    this.denominationBlock.setValue();
                    break;
                case 27: // ESC
                    this.betPerLineBlock.setValue();
                    break;
                case 48: // 0
                    this.linesBlock.setValue();
                    break;
                case 49: // 1
                    this.maxBetClickHandler();
                    break;
                case 51: // 3
                    this.panel.btns.menu.onClick();
                    break;
                case 53: // 5
                    this.autoSpinClick();
                    break;
                default: {}
            }
        }
    }

    _initTogglingBlocks() {
        this.linesBlock = new ToggleBlock({
            node: document.querySelector('#linesBlock'),
            items: settings.lines,
            title: Translator.get('selectLine')
        }, {
            setValue: this.props.setLines,
            setInterfaceIdle: this.setIdle,
            disableInterface: this.disableInterface,
            setSpinPossibility: this.props.setSpinPossibility,
            controlBtn: this.panel.btns.lines
        });

        this.betPerLineBlock = new ToggleBlock({
            node: document.querySelector('#betPerLineBlock'),
            items: settings.betPerLine,
            title: Translator.get('selectBet')
        }, {
            setValue: this.props.setBetPerLine,
            setInterfaceIdle: this.setIdle,
            disableInterface: this.disableInterface,
            setSpinPossibility: this.props.setSpinPossibility,
            controlBtn: this.panel.btns.betPerLine
        });

        this.denominationBlock = new ToggleBlock({
            node: document.querySelector('#denominationBlock'),
            items: settings.denominations.map(item => item.toFixed(2)),
            title: Translator.get('selectDenomination')
        }, {
            setValue: this.props.setDenomination,
            setInterfaceIdle: this.setIdle,
            disableInterface: this.disableInterface,
            setSpinPossibility: this.props.setSpinPossibility,
            controlBtn: this.panel.btns.denomination
        });

        this.langBlock = new ToggleLanguageBlock({
            node: document.querySelector('#languageBlock'),
            items: ['en', 'ru', 'es', 'hr', 'cz', 'fr', 'it', 'de', 'hu', 'pl', 'pt', 'ro', 'gr', 'nl', 'al', 'ua', 'rs'],
            title: Translator.get('selectLanguage')
        }, {
            setValue: this.setLanguage,
            setInterfaceIdle: this.setIdle,
            disableInterface: this.disableInterface,
            setSpinPossibility: this.props.setSpinPossibility,
            controlBtn: this.panel.btns.language
        });
    }

}
