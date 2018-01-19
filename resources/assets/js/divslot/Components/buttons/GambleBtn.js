import Button from "./Button";

export default class GambleBtn extends Button {
    constructor(props) {
        super(props);

        this.overlayColor = props.overlayColor;
    }

    // _initEffects() {
    //     this.node.onmouseenter = function() {
    //         if (this.style.backgroundPosition !== spriteParts.disabled) {
    //             this.style.backgroundColor = `rgba(${this.overlayColor}, 0.5)`;
    //         }
    //     };
    //     this.node.onmousedown = function() {
    //         if (this.style.backgroundPosition !== spriteParts.disabled) {
    //             this.style.backgroundColor = 'white';
    //         }
    //     };
    //     this.node.onmouseup = function() {
    //         if (this.style.backgroundPosition !== spriteParts.disabled) {
    //             this.style.backgroundColor = '';
    //         }
    //     };
    //     this.node.onmouseleave = function() {
    //         if (this.style.backgroundPosition !== spriteParts.disabled) {
    //             this.style.backgroundColor = '';
    //         }
    //     };
    // }
}