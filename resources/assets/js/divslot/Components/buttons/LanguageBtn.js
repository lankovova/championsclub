import Button from './Button';

export default class LanguageBtn extends Button {
    constructor(props) {
        super(props);

        this.props = props;

        this.node.onclick = () => this.props.toggleLanguageBlock();
    }
}
