import LinePresenters from '../Components/LinePresenters';
import Panel from '../Components/Panel';
import ToggleBlock from './../Components/ToggleBlock';
import Alert from './../Components/Alert';

const SSTButtonStates = ['spin', 'stop', 'takeWin', 'speedUpTakeWin'];

class InterfaceController {
    constructor(props) {
        this.props = props;
        const that = this;

        // DEV TEMP
        this._showControls();

        this.linePresenters = new LinePresenters({
            lines: this.props.lines,
            containerNode: this.props.containerNode
        });

        this.alertWindow = new Alert({ node: document.querySelector('#alert') });

        // Init toggling blocks like lines, betPerLine and denomination
        this._initTogglingBlocks();

        this.panel = new Panel(document.querySelector('#panel'), {
            spinStopTake: this.spinStopTake,
            setMaxBet: this.setMaxBet,
            toggleLinesBlock: this.toggleLinesBlock,
            toggleBetPerLineBlock: this.toggleBetPerLineBlock,
            toggleDenominationBlock: this.toggleDenominationBlock,
            toggleLanguageBlock: this.toggleLanguageBlock,
        });

        this.state = {
            _spin: false,
            _stop: false,
            _takeWin: false,
            _speedUpTakeWin: false,
            _denomination: false,
            _lines: false,
            _betPerLine: false,
            _maxBet: false,
            _menu: false,
            _gamble: false,
            _auto: false,
            _language: false,

            // TODO: Maybe segregate this states into buttons components
            set spin(newState) {
                if (newState)
                    that.panel.SSTBtn.text = 'Start';

                this._spin = newState;
                that._handleDisablingSSTBtn();
            },
            get spin() { return this._spin; },
            set stop(newState) {
                if (newState)
                    that.panel.SSTBtn.text = 'Stop';

                this._stop = newState;
                that._handleDisablingSSTBtn();
            },
            get stop() { return this._stop; },
            set takeWin(newState) {
                if (newState)
                    that.panel.SSTBtn.text = 'Take';

                this._takeWin = newState;
                that._handleDisablingSSTBtn();
            },
            get takeWin() { return this._takeWin; },
            set speedUpTakeWin(newState) {
                this._speedUpTakeWin = newState;
                that._handleDisablingSSTBtn();
            },
            get speedUpTakeWin() { return this._speedUpTakeWin; },

            set denomination(newState) {
                that.panel.denominationBtn.state = newState;
                this._denomination = newState;
            },
            get denomination() { return this._denomination; },
            set lines(newState) {
                that.panel.linesBtn.state = newState;
                this._lines = newState;
            },
            get lines() { return this._lines; },
            set betPerLine(newState) {
                that.panel.betPerLineBtn.state = newState;
                this._betPerLine = newState;
            },
            get betPerLine() { return this._betPerLine; },
            set maxBet(newState) {
                that.panel.maxBetBtn.state = newState;
                this._maxBet = newState;
            },
            get maxBet() { return this._maxBet; },
            set menu(newState) {
                that.panel.menuBtn.state = newState;
                this._menu = newState;
            },
            get menu() { return this._menu; },
            set gamble(newState) {
                that.panel.gambleBtn.state = newState;
                this._gamble = newState;
            },
            get gamble() { return this._gamble; },
            set auto(newState) {
                that.panel.autoBtn.state = newState;
                this._auto = newState;
            },
            get auto() { return this._auto; },
            set language(newState) {
                that.panel.autoBtn.state = newState;
                this._language = newState;
            },
            get language() { return this._language; }
        };

        this._initKeyboardListeners();
    }

    // Disables sst button if all of its states is set to false
    _handleDisablingSSTBtn() {
        let noAvailableState = true;
        SSTButtonStates.forEach(SSTBtnState => {
            if (this.state[SSTBtnState]) noAvailableState = false;
        });

        if (noAvailableState)
            this.panel.SSTBtn.disable();
        else
            this.panel.SSTBtn.enable();
    }

    _showControls() {
        console.log(
        `Controls:
            space - Spin
            < - Increase lines
            > - Increase bet per line
            d - Increase denomination
            m - Set max bet`
        );
    }

    spinStopTake = () => {
        if (this.state.spin) {
            this.props.spinReels();
        } else if (this.state.stop) {
            this.props.stopReels();
        } else if (this.state.takeWin) {
            this.props.takeWin();
        } else if (this.state.speedUpTakeWin) {
            this.props.speedUpTakeWin();
        }
    }

    setLines = (lines) => {
        if (this.state.lines)
            this.props.setLines(lines);
    }

    setBerPerLine = (betPerLine) => {
        if (this.state.betPerLine)
            this.props.setBerPerLine(betPerLine);
    }

    setDenomination = (denomination) => {
        if (this.state.denomination)
            this.props.setDenomination(denomination);
    }

    setMaxBet = () => {
        if (this.state.maxBet)
            this.props.setMaxBet();
    }

    toggleLinesBlock = () => {
        if (this.state.lines)
            this.linesBlock.toggle();
    }

    toggleBetPerLineBlock = () => {
        if (this.state.betPerLine)
            this.betPerLineBlock.toggle();
    }

    toggleDenominationBlock = () => {
        if (this.state.denomination)
            this.denominationBlock.toggle();
    }

    toggleLanguageBlock = () => {
        if (this.state.language)
            this.langBlock.toggle();
    }

    showAlert = (alertText) => {
        this.alertWindow.text = alertText;
        this.alertWindow.show();
    }

    hideAlert = () => {
        this.alertWindow.hide();
    }

    enableSpin = () => this.state.spin = true;
    disableSpin = () => this.state.spin = false;

    enableSpinAndAuto = () => {
        this.state.spin = true;
        this.state.auto = true;
    }
    disableSpinAndAuto = () => {
        this.state.spin = false;
        this.state.auto = false;
    }

    enableStop = () => this.state.stop = true;
    disableStop = () => this.state.stop = false;

    enableTakeWin = () => this.state.takeWin = true;
    disableTakeWin = () => this.state.takeWin = false;

    enableSpeedUpTransferWin = () => this.state.speedUpTakeWin = true;
    disableSpeedUpTransferWin = () => this.state.speedUpTakeWin = false;

    enableLines = () => this.state.lines = true;
    enableBetPerLines = () => this.state.betPerLine = true;
    enableDenomination = () => this.state.denomination = true;
    enableLanguage = () => this.state.language = true;

    setIdle = () => {
        this.enableInterface();
        this.state.spin = true;
    }

    setTakeWin = () => {
        this.state.gamble = true;
        this.state.takeWin = true;
    }

    // FIXME: Handle separate state
    disableInterface = () => {
        for (const stateKey of Object.keys(this.state)) {
            // Skip private properties
            if (stateKey.charAt(0) === '_') continue;

            this.state[stateKey] = false;
        }
    }
    // FIXME: Handle separate state
    enableInterface = () => {
        for (const stateKey of Object.keys(this.state)) {
            // Skip private properties
            if (stateKey.charAt(0) === '_') continue;

            // Skip if state is in SSTButtonStates array
            if (SSTButtonStates.includes(stateKey)) continue;

            this.state[stateKey] = true;
        }
    }

    _initKeyboardListeners() {
        window.onkeydown = (event) => {
            var keyCode = event.which || event.keyCode;

            switch (keyCode) {
                case 32: // Space
                    this.spinStopTake();
                    break;
                case 188: // <
                    this.setLines();
                    break;
                case 190: // >
                    this.setBerPerLine();
                    break;
                case 77: // m
                    this.setMaxBet();
                    break;
                case 68: // d
                    this.setDenomination();
                    break;
                default: {}
            }
        }
    }

    _initTogglingBlocks() {
        this.linesBlock = new ToggleBlock({
            node: document.querySelector('#linesBlock'),
            items: settings.lines
        }, {
            setValue: this.setLines,
            enableSelf: this.enableLines,
            setInterfaceIdle: this.setIdle,
            disableInterface: this.disableInterface,
        });

        this.betPerLineBlock = new ToggleBlock({
            node: document.querySelector('#betPerLineBlock'),
            items: settings.betPerLine
        }, {
            setValue: this.setBerPerLine,
            enableSelf: this.enableBetPerLines,
            setInterfaceIdle: this.setIdle,
            disableInterface: this.disableInterface,
        });

        this.denominationBlock = new ToggleBlock({
            node: document.querySelector('#denominationBlock'),
            items: settings.denominations.map(item => (item / 100).toFixed(2))
        }, {
            setValue: this.setDenomination,
            enableSelf: this.enableDenomination,
            setInterfaceIdle: this.setIdle,
            disableInterface: this.disableInterface,
        });

        this.langBlock = new ToggleBlock({
            node: document.querySelector('#languageBlock'),
            items: ['hyi', 'lol', 'kek']
        }, {
            setValue: this.setLanguage,
            enableSelf: this.enableLanguage,
            setInterfaceIdle: this.setIdle,
            disableInterface: this.disableInterface,
        });
    }

}

export default InterfaceController;
