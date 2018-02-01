import OldMultipleStatesBtn from "./OldMultipleStatesBtn";
import Translator from './../../Translator';

export default class OldBetOneBtn extends OldMultipleStatesBtn {
    constructor(props) {
        super(props);

        const self = this;

        this.state = {
            _betOne: false,
            _double: false,
            _red: false,
            get betOne() { return this._betOne; },
            set betOne(newState) {
                if (newState) {
                    self.node.classList.remove('double');
                }

                this._betOne = newState;
                self._handleDisabling();
            },
            get double() { return this._double; },
            set double(newState) {
                if (newState) {
                    self.node.classList.add('double');
                }

                this._double = newState;
                self._handleDisabling();
            },
            get red() { return this._red; },
            set red(newState) {
                this._red = newState;
                self._handleDisabling();
            }
        };
    }
}