import Button from "./Button";

export default class GambleModalButton extends Button {
    constructor(props) {
        super(props);

        this.overlayClass = props.overlayClass;
    }

    _initEffects() {
        const self = this;
        this.node.onmouseenter = function() {
            if (!self.isDisabled) {
                self.isDisabled = false;
                this.querySelector('.overflow-layer').classList.add(self.overlayClass);
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
                this.querySelector('.overflow-layer').classList.remove(self.overlayClass);
            }
        };
        this.node.onmouseleave = function() {
            if (!self.isDisabled) {
                self.isDisabled = false;
                this.querySelector('.overflow-layer').classList.remove(self.overlayClass);
            }
        };
    }
}