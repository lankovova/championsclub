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
                if (newState)
                    that.panel.denominationBtn.enable();
                else
                    that.panel.denominationBtn.disable();

                this._denomination = newState;
            },
            get denomination() { return this._denomination; },
            set lines(newState) {
                if (newState)
                    that.panel.linesBtn.enable();
                else
                    that.panel.linesBtn.disable();

                this._lines = newState;
            },
            get lines() { return this._lines; },
            set betPerLine(newState) {
                if (newState)
                    that.panel.betPerLineBtn.enable();
                else
                    that.panel.betPerLineBtn.disable();

                this._betPerLine = newState;
            },
            get betPerLine() { return this._betPerLine; },
            set maxBet(newState) {
                if (newState)
                    that.panel.maxBetBtn.enable();
                else
                    that.panel.maxBetBtn.disable();

                this._maxBet = newState;
            },
            get maxBet() { return this._maxBet; },
            set menu(newState) {
                if (newState)
                    that.panel.menuBtn.enable();
                else
                    that.panel.menuBtn.disable();

                this._menu = newState;
            },
            get menu() { return this._menu; },
            set gamble(newState) {
                if (newState)
                    that.panel.gambleBtn.enable();
                else
                    that.panel.gambleBtn.disable();

                this._gamble = newState;
            },
            get gamble() { return this._gamble; },
            set auto(newState) {
                if (newState)
                    that.panel.autoBtn.enable();
                else
                    that.panel.autoBtn.disable();

                this._auto = newState;
            },
            get auto() { return this._auto; },
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

    showAlert = (alertText) => {
        this.alertWindow.text = alertText;
        this.alertWindow.show();
    }

    hideAlert = (bonusSpinsAmount) => {
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

    setIdle = () => {
        this.enableInterface();
        this.state.spin = true;
    }

    setTakeWin = () => {
        this.state.gamble = true;
        this.state.takeWin = true;
    }

    disableInterface = () => {
        for (const stateKey of Object.keys(this.state)) {
            // Skip private properties
            if (stateKey.charAt(0) === '_') continue;

            this.state[stateKey] = false;
        }
    }

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
            items: settings.lines,
            itemParams: {
                width: 50,
                height: 50,
                margin: 5
            }
        }, {
            setValue: this.setLines,
            enableSelf: this.enableLines,
            setInterfaceIdle: this.setIdle,
            disableInterface: this.disableInterface,
        });

        this.betPerLineBlock = new ToggleBlock({
            node: document.querySelector('#betPerLineBlock'),
            items: settings.betPerLine,
            itemParams: {
                width: 50,
                height: 50,
                margin: 5
            }
        }, {
            setValue: this.setBerPerLine,
            enableSelf: this.enableBetPerLines,
            setInterfaceIdle: this.setIdle,
            disableInterface: this.disableInterface,
        });

        this.denominationBlock = new ToggleBlock({
            node: document.querySelector('#denominationBlock'),
            items: settings.denominations,
            itemParams: {
                width: 80,
                height: 80,
                margin: 5
            }
        }, {
            setValue: this.setDenomination,
            enableSelf: this.enableDenomination,
            setInterfaceIdle: this.setIdle,
            disableInterface: this.disableInterface,
        });
    }

}

export default InterfaceController;
