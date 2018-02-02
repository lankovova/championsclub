const spriteParts = {
    enabled: 'left top',
    hovered: 'right top',
    pressed: 'left bottom',
    disabled: 'right bottom',
}

export default class Button {
    constructor(props) {
        this.props = props;
        this.node = this.props.node;

        if (!this.node) console.error(`Bad node passed to ${this.constructor.name} component`);

        this._state = false;
        this.isDisabled = true;

        this.titleNode = this.node.querySelector('.title');
        if (this.titleNode && this.props.title) {
            this.titleNode.innerText = this.props.title;
        }

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
        (newState) ? this.enableView() : this.disableView();
        this._state = newState;
    }

    set text(newText) {
        this.node.innerText = newText;
    }
}
