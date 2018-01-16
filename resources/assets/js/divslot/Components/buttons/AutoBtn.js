import Button from './Button';

export default class AutoBtn extends Button {
    constructor(props) {
        super(props);

        this.props = props;

        this.node.onclick = () => console.log('Auto clicked');
    }
}
