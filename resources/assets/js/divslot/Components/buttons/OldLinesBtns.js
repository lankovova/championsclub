import OldButton from './OldButton';

export default class OldLinesBtns {
    constructor(props) {
        this.props = props;
        this.node = this.props.node;

        this.state = false;

        this.btns = [];

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
                value: lineBtnNodeValueAttr,
                previousState: false
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

    highlightAppropriateBtn(linesAmount) {
        this.btns.forEach(btn => {
            (btn.value === linesAmount) ? btn.button.disable() : btn.button.enable();
        });
    }

    // TODO: Separate oldLinesBtns state and lines buttons state change
    enable() {
        this.state = true;

        // Restore all lines btns previous states
        this.btns.forEach(btn => {
            if (btn.previousState) {
                btn.button.enable();
            }
        });
    }

    // TODO: Separate oldLinesBtns state and lines buttons state change
    disable() {
        this.state = false;

        // Save to previousState store all lines btns states
        this.btns.forEach(btn => {
            btn.previousState = btn.button.state;
            btn.button.disable();
        });
    }
}