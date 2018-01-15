import Button from './Button';

export default class DenominationBtn extends Button {
    constructor(props) {
        super(props);

        this.props = props;

        this.numberField = this.node.querySelector('.number');
        this.node.onclick = () => this.props.toggleDenominationBlock();
    }

    set number(newNumber) {
        this.numberField.innerText = newNumber;
    }
}
