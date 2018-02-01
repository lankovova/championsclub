export default class TitleValue {
    constructor({node, title, value}) {
        this.node = node;

        // If this node exists
        if (this.node) {
            this.titleNode = this.node.querySelector('.title');
            this.valueNode = this.node.querySelector('.value');
        } else {
            console.error(`No node property passed in ${this.constructor.name} component`);
        }

        // Set init values
        this.title = title ? title : '';
        this.value = value ? value : '-';
    }

    /**
     * Sets new title in component
     */
    set title(title) {
        if (this.titleNode) this.titleNode.innerText = title;
    }

    /**
     * Sets new vaalue in component
     */
    set value(value) {
        if (this.valueNode) this.valueNode.innerText = value;
    }
}