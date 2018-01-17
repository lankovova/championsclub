import Button from './Button';

export default class AutoBtn extends Button {
    constructor(props) {
        super(props);

        this.props = props;

        this.isOn = false;

        this.node.onclick = () => this.props.autoSpinClick();
    }
}
