const defaultColor = '#686890';

export default class LinePresenter {
    constructor(line, color) {
        this.line = line;

        this.color = color;
        // Create node
        this.node = document.createElement('div');
        this.node.text = '';
        this.node.className += 'line_presenter';
        this.node.style.backgroundColor = (settings.presentersDefaultColor) ? settings.presentersDefaultColor : defaultColor;

        // Init listners
        this.node.onmousedown = () => this.line.show();
        this.node.onmouseup = () => this.line.hide();
        this.node.onmouseleave = () => this.line.hide();
    }

    set text(text) {
        this.node.style.backgroundColor = (!text || text === '')
                                            ? (settings.presentersDefaultColor)
                                                ? settings.presentersDefaultColor
                                                : defaultColor
                                            : this.color;

        this.node.innerText = text;
    }
}
