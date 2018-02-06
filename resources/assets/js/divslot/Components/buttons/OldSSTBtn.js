import OldMultipleStatesBtn from './OldMultipleStatesBtn';

export default class OldSSTBtn extends OldMultipleStatesBtn {
    constructor(props) {
        super(props);

        const self = this;

        this.state = {
            _spin: false,
            _stop: false,
            _takeWin: false,
            _speedUpTakeWin: false,
            get spin() { return this._spin; },
            set spin(newState) {
                this._spin = newState;
                self._handleDisabling();
            },
            get stop() { return this._stop; },
            set stop(newState) {
                this._stop = newState;
                self._handleDisabling();
            },
            get takeWin() { return this._takeWin; },
            set takeWin(newState) {
                this._takeWin = newState;
                self._handleDisabling();
            },
            get speedUpTakeWin() { return this._speedUpTakeWin; },
            set speedUpTakeWin(newState) {
                this._speedUpTakeWin = newState;
                self._handleDisabling();
            }
        };
    }

}
