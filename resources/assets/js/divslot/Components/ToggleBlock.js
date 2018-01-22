import { transitionEnd } from './../events';

export default class ToggleBlock {
    constructor(options, props) {
        this.props = props;

        this.node = options.node;
        this.isToggled = false;

        this.itemsNodes = [];
        this.activeItem;

        this.init(options);
        this._initListeners();
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

            // Place value from options.items to element innerText
            item.innerText = value;

            this.itemsNodes.push(item);

            // Add item to content element
            blockContent.appendChild(item);
        });
    }

    setValue = (itemValue) => {
        if (this.props.controlBtn.state) {
            this.props.setValue(itemValue);
        }
    }

    _initListeners() {
        this.itemsNodes.forEach(item => {
            // Add click event on item
            item.onclick = () => {
                this.setValue(item.getAttribute('data-value'));

                if (this.props.controlBtn.state) {
                    // Toggle(hide) block itself
                    this.toggle();
                }
            }
        });

        this.node.addEventListener(transitionEnd, (event) => {
            if (this.isToggled) {
                this.props.disableInterface();

                // Enable self controll button
                this.props.controlBtn.enable();
            } else {
                // If block is sparred
                event.target.style.display = '';

                // FIXME: After toggling restore previous interface state
                // After toggling enable interface
                this.props.setInterfaceIdle();
                this.props.setSpinPossibility();
            }
        });
    }

    highlightItem(itemValue) {
        // If there is active item
        if (this.activeItem) {
            // Remove active highlight
            this.activeItem.classList.remove('item--active');
        }

        // Add highlight to new item
        this.itemsNodes.forEach(item => {
            if (+item.getAttribute('data-value') === itemValue) {
                item.classList.add('item--active');
                // Remember active item
                this.activeItem = item;
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
