import LinePresenters from '../Components/LinePresenters';
import Panel from '../Components/Panel';
import ToggleBlock from './../Components/ToggleBlock';
import Alert from './../Components/Alert';

class InterfaceController {
    constructor(props) {
        this.props = props;
        const that = this;

        // DEV TEMP
        this._showControls();

        // Init toggling blocks like lines, betPerLine, denomination and language
        this._initTogglingBlocks();

        // Init handler on keyboard actions
        this._initKeyboardListeners();

        this.linePresenters = new LinePresenters({
            lines: this.props.lines,
            containerNode: this.props.containerNode
        });

        this.alertWindow = new Alert({ node: document.querySelector('#alert') });

        this.panel = new Panel(document.querySelector('#panel'), {
            spinStopTake: this.spinStopTake,
            setMaxBet: this.setMaxBet,
            toggleLinesBlock: this.toggleLinesBlock,
            toggleBetPerLineBlock: this.toggleBetPerLineBlock,
            toggleDenominationBlock: this.toggleDenominationBlock,
            toggleLanguageBlock: this.toggleLanguageBlock,
        });
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

    setLines = (lines) => {
        if (this.panel.btns.lines.state) {
            this.props.setLines(lines);
        }
    }

    setBerPerLine = (betPerLine) => {
        if (this.panel.btns.betPerLine.state)
            this.props.setBerPerLine(betPerLine);
    }

    setDenomination = (denomination) => {
        if (this.panel.btns.denomination.state)
            this.props.setDenomination(denomination);
    }

    setMaxBet = () => {
        if (this.panel.btns.maxBet.state)
            this.props.setMaxBet();
    }

    toggleLinesBlock = () => {
        if (this.panel.btns.lines.state)
            this.linesBlock.toggle();
    }

    toggleBetPerLineBlock = () => {
        if (this.panel.btns.betPerLine.state)
            this.betPerLineBlock.toggle();
    }

    toggleDenominationBlock = () => {
        if (this.panel.btns.denomination.state)
            this.denominationBlock.toggle();
    }

    toggleLanguageBlock = () => {
        if (this.panel.btns.language.state)
            this.langBlock.toggle();
    }

    showAlert = (alertText) => {
        this.alertWindow.text = alertText;
        this.alertWindow.show();
    }

    hideAlert = () => {
        this.alertWindow.hide();
    }

    enableSpin = () => this.panel.btns.SST.state.spin = true;
    disableSpin = () => this.panel.btns.SST.state.spin = false;

    enableSpinAndAuto = () => {
        this.panel.btns.SST.state.spin = true;
        this.panel.btns.auto.state = true;
    }
    disableSpinAndAuto = () => {
        this.panel.btns.SST.state.spin = false;
        this.panel.btns.auto.state = false;
    }

    enableStop = () => this.panel.btns.SST.state.stop = true;
    disableStop = () => this.panel.btns.SST.state.stop = false;

    enableTakeWin = () => this.panel.btns.SST.state.takeWin = true;
    disableTakeWin = () => this.panel.btns.SST.state.takeWin = false;

    enableSpeedUpTransferWin = () => this.panel.btns.SST.state.speedUpTakeWin = true;
    disableSpeedUpTransferWin = () => this.panel.btns.SST.state.speedUpTakeWin = false;

    enableLines = () => this.panel.btns.lines.state = true;
    enableBetPerLines = () => this.panel.btns.betPerLine.state = true;
    enableDenomination = () => this.panel.btns.denomination.state = true;
    enableLanguage = () => this.panel.btns.language.state = true;

    setIdle = () => {
        this.enableInterface();
        this.panel.btns.SST.state.spin = true;
    }

    setTakeWin = () => {
        this.panel.btns.gamble.state = true;
        this.panel.btns.SST.state.takeWin = true;
    }

    // Disable each btn of panel btns
    disableInterface = () => {
        Object.keys(this.panel.btns).forEach(btnKey => this.panel.btns[btnKey].disable());
    }

    // Enable each btn of panel btns
    enableInterface = () => {
        Object.keys(this.panel.btns).forEach(btnKey => this.panel.btns[btnKey].enable());
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
            items: settings.denominations.map(item => item.toFixed(2))
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
