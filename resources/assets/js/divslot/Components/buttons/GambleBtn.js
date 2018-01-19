import Button from "./Button";

export default class GambleBtn extends Button {
    constructor(props) {
        super(props);

        this.overlayColor = props.overlayColor;
    }

    _initEffects() {
        const self = this;
        this.node.onmouseenter = function() {
            if (!self.isDisabled) {
                self.isDisabled = false;
                this.querySelector('.overflow-layer').style.backgroundColor = self.overlayColor;
            }
        };
        this.node.onmousedown = function() {
            if (!self.isDisabled) {
                self.isDisabled = false;
            }
        };
        this.node.onmouseup = function() {
            if (!self.isDisabled) {
                self.isDisabled = false;
            }
        };
        this.node.onmouseleave = function() {
            if (!self.isDisabled) {
                self.isDisabled = false;
                this.querySelector('.overflow-layer').style.backgroundColor = '';
            }
        };
    }
}