import Button from './Button';

export default class GambleBtn extends Button {
    constructor(props) {
        super(props);

        this.props = props;

        this.node.onclick = () => console.log('Gamble clicked');
    }
}
