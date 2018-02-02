import OldButton from './OldButton';

export default class OldLinesBtns {
    constructor(props) {
        this.props = props;
        this.node = this.props.node;

        this.state = false;

        this.btns = [];
        this.activeBtn;

        this._initLinesBtns();
    }

    _initLinesBtns() {
        const linesBtnsNodes = this.node.children;

        for (let i = 0; i < linesBtnsNodes.length; i++) {
            const lineBtnNode = linesBtnsNodes[i];
            // Get line button value attribute
            const lineBtnNodeValueAttr = +lineBtnNode.getAttribute('data-value');

            const lineBtn = {
                button: new OldButton({
                    node: lineBtnNode,
                    onClick: () => this.setLines(lineBtnNodeValueAttr)
                }),
                value: lineBtnNodeValueAttr
            }

            // Add line btn to all lines array
            this.btns.push(lineBtn);
        }
    }

    setLines(linesAmount) {
        // Do nothing if state is false
        if (!this.state) return;

        // Set lines
        this.props.onClick(linesAmount);
    }

    // Save active btn
    highlightAppropriateBtn(linesAmount) {
        this.activeBtn = this.btns.find(lineBtn => lineBtn.value === linesAmount);
    }

    enable() {
        // Change state of lines buttons wrapper
        this.state = true;
        // Enable all buttons
        this.btns.forEach(btn => btn.button.enable());
        // And disable active button if it exists
        if (this.activeBtn) this.activeBtn.button.disable();
    }

    disable() {
        // Change state of lines buttons wrapper
        this.state = false;
        // Disable all lines buttons
        this.btns.forEach(btn => btn.button.disable());
    }
}