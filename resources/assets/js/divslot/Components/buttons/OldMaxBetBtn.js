import OldMultipleStatesBtn from "./OldMultipleStatesBtn";
import Translator from './../../Translator';

export default class OldMaxBetBtn extends OldMultipleStatesBtn {
    constructor(props) {
        super(props);

        const self = this;

        this.state = {
            _maxBet: false,
            _black: false,
            get maxBet() { return this._maxBet; },
            set maxBet(newState) {
                this._maxBet = newState;
                self._handleDisabling();
            },
            get black() { return this._black; },
            set black(newState) {
                this._black = newState;
                self._handleDisabling();
            }
        };
    }
}