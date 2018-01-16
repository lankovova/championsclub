import Button from './Button';

export default class MenuBtn extends Button {
    constructor(props) {
        super(props);

        this.props = props;

        this.node.onclick = () => console.log('Menu clicked');
    }
}
