import ToggleBlock from "./ToggleBlock";

export default class ToggleLanguageBlock extends ToggleBlock {
    constructor(options, props) {
        super(props);
    }

    init(options) {
        const blockContent = this.node.querySelector('.content');

        const reversedItems = options.items.slice().reverse();

        // Fill block content with appropriate items
        reversedItems.forEach(value => {
            // Init element properties
            const item = document.createElement('div');
            item.className = 'item';
            item.setAttribute('data-value', value);

            // Place value from options.items to element innerHTML
            item.innerHTML = value;

            this.itemsNodes.push(item);

            // Add item to content element
            blockContent.appendChild(item);
        });
    }

}