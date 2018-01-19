import ToggleBlock from "./ToggleBlock";

export default class ToggleLanguageBlock extends ToggleBlock {
    constructor(options, props) {
        super(options, props);
    }

    init(options) {
        const blockContent = this.node.querySelector('.content');

        const reversedItems = options.items.slice().reverse();

        // Fill block content with appropriate items
        reversedItems.forEach(value => {
            // Init element properties
            const item = document.createElement('div');
            item.className = 'item item--language';
            item.style.backgroundImage = `url('public/img/lang_flags/${value}_btn_bg.png')`;
            item.style.backgroundSize = '200% 200%';
            item.style.backgroundPosition = 'top left';
            item.setAttribute('data-value', value);

            this.itemsNodes.push(item);

            // Add item to content element
            blockContent.appendChild(item);
        });
    }

}