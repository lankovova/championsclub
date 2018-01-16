import Button from './Button';

export default class LinesBtn extends Button {
    constructor(props) {
        super(props);

        this.props = props;

        this.numberField = this.node.querySelector('.number');
        this.node.onclick = () => this.props.toggleLinesBlock();
    }

    set number(newNumber) {
        this.numberField.innerText = newNumber;
    }
}
