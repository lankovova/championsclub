import MultipleStatesButton from './MultipleStatesButton';
import Translator from './../../Translator';

export default class MaxBetBtn extends MultipleStatesButton {
    constructor(props) {
        super(props);

        const self = this;
        this.state = {
            _maxbet: false,
            _black: false,
            get maxbet() { return this._maxbet; },
            set maxbet(newState) {
                if (newState)
                    self.text = Translator.maxbet;

                this._maxbet = newState;
                self._handleDisabling();
            },
            get black() { return this._black; },
            set black(newState) {
                if (newState)
                    self.text = Translator.black;

                this._black = newState;
                self._handleDisabling();
            }
        };
    }
}
