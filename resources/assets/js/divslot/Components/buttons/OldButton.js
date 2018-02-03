const spriteParts = {
    enabled: 'left top',
    hovered: '',
    pressed: 'right top',
    disabled: 'left bottom',
}

export default class OldButton {
    constructor(props) {
        this.props = props;
        this.node = this.props.node;

        if (!this.node) console.error(`Bad node passed to ${this.constructor.name} component`);

        this._state = false;
        this.isDisabled = true;
        // Flag for always disabled button
        this.isDead = false;

        this.node.onclick = () => this.onClick();

        this._initEffects();
    }

    onClick() {
        if (this.state === true) {
            this.props.onClick();
        }
    }

    _initEffects() {
        const self = this;
        this.node.onmouseenter = function() {
            if (!self.isDisabled) {
                self.isDisabled = false;
                this.style.backgroundPosition = spriteParts.hovered;
            }
        };
        this.node.onmousedown = function() {
            if (!self.isDisabled) {
                self.isDisabled = false;
                this.style.backgroundPosition = spriteParts.pressed;
            }
        };
        this.node.onmouseup = function() {
            if (!self.isDisabled) {
                self.isDisabled = false;
                this.style.backgroundPosition = spriteParts.enabled;
            }
        };
        this.node.onmouseleave = function() {
            if (!self.isDisabled) {
                self.isDisabled = false;
                this.style.backgroundPosition = spriteParts.enabled;
            }
        };
    }

    enable() { this.state = true; }
    disable() { this.state = false; }

    enableView() {
        this.isDisabled = false;
        this.node.style.backgroundPosition = spriteParts.enabled;
        this.node.style.cursor = 'pointer';
    }

    disableView() {
        this.isDisabled = true;
        this.node.style.backgroundPosition = spriteParts.disabled;
        this.node.style.cursor = 'default';
    }

    get state() { return this._state; }
    set state(newState) {
        this._state = (this.isDead) ? false : newState;
        (this._state) ? this.enableView() : this.disableView();
    }
}
