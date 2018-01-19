import MultipleStatesButton from "./MultipleStatesButton";

export default class GambleBtn extends MultipleStatesButton {
    constructor(props) {
        super(props);

        const self = this;
        this.state = {
            _gamble: false,
            _red: false,
            get gamble() { return this._gamble; },
            set gamble(newState) {
                if (newState)
                    self.text = 'Gamble';

                this._gamble = newState;
                self._handleDisabling();
            },
            get red() { return this._red; },
            set red(newState) {
                if (newState)
                    self.text = 'Red';

                this._red = newState;
                self._handleDisabling();
            }
        };
    }
}