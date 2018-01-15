import { transitionEnd } from './../events';

class ToggleBlock {
    constructor(options, props) {
        this.props = props;

        this.node = options.node;
        this.isToggled = false;

        this.init(options);
    }

    init(options) {
        const blockContent = this.node.querySelector('.content');

        const reversedItems = options.items.slice().reverse();

        // Fill block content with appropriate items
        reversedItems.forEach(value => {
            // Init element properties
            const item = document.createElement('div');
            item.className = 'item';
            item.style.width = `${options.itemParams.width}px`;
            item.style.height = `${options.itemParams.height}px`;
            item.style.margin = `${options.itemParams.margin}px`;
            item.innerHTML = value;

            // Add click event on item
            item.onclick = () => {
                this.props.setValue(value);
                this.toggle();
            }

            // Add item to content element
            blockContent.appendChild(item);
        });

        // Set block width depending on item width
        const itemRealWidth = options.itemParams.width + options.itemParams.margin * 2;
        const maxItemsInRow = (reversedItems.length >= 10) ? Math.ceil(reversedItems.length / 2) : reversedItems.length;
        this.node.style.width = `${10 + itemRealWidth * maxItemsInRow}px`;

        this._initListeners();
    }

    _initListeners() {
        this.node.addEventListener(transitionEnd, (event) => {
            if (this.isToggled) {
                this.props.disableInterface();
                this.props.enableSelf();
            } else {
                // If block is sparred
                event.target.style.display = '';
                // After toggling enable interface
                this.props.setInterfaceIdle();
            }
        });
    }

    toggle() {
        if (this.isToggled) {
            this.node.style.transform = `translateY(50px)`;
            this.isToggled = false;
        } else {
            this.node.style.display = `block`;
            this.node.style.transform = `translateY(-${this.node.offsetHeight}px)`;
            this.isToggled = true;

        }
        // Disable interface while toggling
        this.props.disableInterface();
    }
}

export default ToggleBlock;