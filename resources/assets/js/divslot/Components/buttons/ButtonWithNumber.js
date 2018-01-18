import Button from './Button';

export default class ButtonWithNumber extends Button {
    constructor(props) {
        super(props);

        this.numberField = this.node.querySelector('.number');
        if (!this.numberField) console.warn('No .number element in ButtonWithNumber component');
    }

    set number(newNumber) {
        this.numberField.innerText = newNumber;
    }
}
