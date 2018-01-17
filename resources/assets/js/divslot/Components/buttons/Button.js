const spriteParts = {
    enabled: 'left top',
    hovered: 'right top',
    pressed: 'left bottom',
    disabled: 'right bottom',
}

export default class Button {
    constructor(props) {
        this.node = props.node;

        this._state = false;

        this.node.onclick = () => props.onClick();

        this._initEffects();
    }

    _initEffects() {
        this.node.onmouseenter = function() {
            if (this.style.backgroundPosition !== spriteParts.disabled) {
                this.style.backgroundPosition = spriteParts.hovered;
            }
        };
        this.node.onmousedown = function() {
            if (this.style.backgroundPosition !== spriteParts.disabled) {
                this.style.backgroundPosition = spriteParts.pressed;
            }
        };
        this.node.onmouseup = function() {
            if (this.style.backgroundPosition !== spriteParts.disabled) {
                this.style.backgroundPosition = spriteParts.enabled;
            }
        };
        this.node.onmouseleave = function() {
            if (this.style.backgroundPosition !== spriteParts.disabled) {
                this.style.backgroundPosition = spriteParts.enabled;
            }
        };
    }

    enable() { this.state = true; }
    disable() { this.state = false; }

    enableView() {
        this.node.style.backgroundPosition = spriteParts.enabled;
        this.node.style.cursor = '';
    }

    disableView() {
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
