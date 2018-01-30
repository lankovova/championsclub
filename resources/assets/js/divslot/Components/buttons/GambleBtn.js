import MultipleStatesButton from "./MultipleStatesButton";
import Translator from './../../Translator';

export default class GambleBtn extends MultipleStatesButton {
    constructor(props) {
        super(props);

        const self = this;

        // Set initial text
        self.text = Translator.gamble;

        this.state = {
            _gamble: false,
            _red: false,
            get gamble() { return this._gamble; },
            set gamble(newState) {
                if (newState)
                    self.text = Translator.gamble;

                this._gamble = newState;
                self._handleDisabling();
            },
            get red() { return this._red; },
            set red(newState) {
                if (newState)
                    self.text = Translator.red;

                this._red = newState;
                self._handleDisabling();
            }
        };
    }
}