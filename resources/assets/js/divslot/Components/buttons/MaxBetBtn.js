import MultipleStatesBtn from './MultipleStatesBtn';
import Translator from './../../Translator';

export default class MaxBetBtn extends MultipleStatesBtn {
    constructor(props) {
        super(props);

        const self = this;
        this.state = {
            _maxbet: false,
            _black: false,
            get maxbet() { return this._maxbet; },
            set maxbet(newState) {
                if (newState)
                    self.text = Translator.get('maxbet');

                this._maxbet = newState;
                self._handleDisabling();
            },
            get black() { return this._black; },
            set black(newState) {
                if (newState)
                    self.text = Translator.get('black');

                this._black = newState;
                self._handleDisabling();
            }
        };
    }
}
