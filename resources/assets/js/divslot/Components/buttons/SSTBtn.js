import MultipleStatesButton from './MultipleStatesButton';

export default class SSTBtn extends MultipleStatesButton {
    constructor(props) {
        super(props);

        this.props = props;

        const self = this;

        this.state = {
            _spin: false,
            _stop: false,
            _takeWin: false,
            _speedUpTakeWin: false,
            get spin() { return this._spin; },
            set spin(newState) {
                if (newState)
                    self.text = 'Start';

                this._spin = newState;
                self._handleDisabling();
            },
            get stop() { return this._stop; },
            set stop(newState) {
                if (newState)
                    self.text = 'Stop';

                this._stop = newState;
                self._handleDisabling();
            },
            get takeWin() { return this._takeWin; },
            set takeWin(newState) {
                if (newState)
                    self.text = 'Take';

                this._takeWin = newState;
                self._handleDisabling();
            },
            get speedUpTakeWin() { return this._speedUpTakeWin; },
            set speedUpTakeWin(newState) {
                if (newState)
                    self.text = 'Take';

                this._speedUpTakeWin = newState;
                self._handleDisabling();
            }
        };
    }

}
