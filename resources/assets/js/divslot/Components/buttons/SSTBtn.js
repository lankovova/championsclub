import Button from './Button';

export default class SSTBtn extends Button {
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
                    self.text = 'Spin';

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
                    self.text = 'SpeedUp';

                this._speedUpTakeWin = newState;
                self._handleDisabling();
            }
        };

        this.node.onclick = () => this.props.spinStopTake();
    }

    enable() {
        // TODO: Maybe remember previous state before disabling
        // and restore it here after enabling
        console.log('TODO: Enabling SST btn');
    }

    disable() {
        for (const stateKey of Object.keys(this.state)) {
            // Skip private props
            if (stateKey.includes('_')) continue;

            this.state[stateKey] = false;
        }
    }

    // Disables sst button if all of its states is set to false
    _handleDisabling() {
        let noAvailableState = true;

        for (const stateKey of Object.keys(this.state)) {
            // Skip private props
            if (stateKey.includes('_')) continue;

            if (this.state[stateKey]) noAvailableState = false;
        }

        // Disable button if all state are set to false
        (noAvailableState) ? this.disableView() : this.enableView();
    }
}
