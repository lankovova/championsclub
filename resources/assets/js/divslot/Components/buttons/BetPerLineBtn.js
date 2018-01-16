import Button from './Button';

export default class BetPerLineBtn extends Button {
    constructor(props) {
        super(props);

        this.props = props;

        this.numberField = this.node.querySelector('.number');
        this.node.onclick = () => this.props.toggleBetPerLineBlock();
    }

    set number(newNumber) {
        this.numberField.innerText = newNumber;
    }
}
