class LinePresenter {
    /**
     * Show/hide line
     * @param {Line} line Line that will be show/hide
     */
    constructor(line, color) {
        this.line = line;

        this.color = color;
        // Create node
        this.node = document.createElement('div');
        this.node.text = '';
        this.node.className += 'line_presenter';

        // Init listners
        this.node.onmousedown = () => this.line.show();
        this.node.onmouseup = () => this.line.hide();
        this.node.onmouseleave = () => this.line.hide();
    }

    set text(text) {
        this.node.style.backgroundColor = (!text || text === '') ? '' : this.color;

        this.node.innerText = text;
    }
}

export default LinePresenter;
