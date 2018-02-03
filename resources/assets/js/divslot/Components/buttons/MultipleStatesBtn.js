import Button from './Button';

export default class MultipleStatesBtn extends Button {
    constructor(props) {
        super(props);
    }

    onClick() {
        this.props.onClick();
    }

    enable(stateToEnable) {
        // Disable all other states of button
        this.disable();

        // If state to enable exists
        if (stateToEnable && this.state[stateToEnable] !== undefined) {
            // Enable passed state
            this.state[stateToEnable] = true;
        }
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
