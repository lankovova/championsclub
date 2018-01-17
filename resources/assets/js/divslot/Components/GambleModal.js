import Buttons from './buttons/Button';

export default class GambleModal {
    constructor(props) {
        this.node = props.node;

        // TODO: Init gamble modal btns here with passed nodes and click handlers
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