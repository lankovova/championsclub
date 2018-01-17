import Buttons from './buttons/Button';

class GambleModal {
    constructor(props) {
        this.node = props.node;

        this.btns = {
            red: {},
            heart: {},
            diamond: {},
            black: {},
            club: {},
            spade: {},
        }
    }

    show() {
        this.node.style.display = 'block';
    }

    hide() {
        this.node.style.display = 'none';
    }
}