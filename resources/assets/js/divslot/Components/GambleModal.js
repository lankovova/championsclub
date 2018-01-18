import Button from './buttons/Button';

export default class GambleModal {
    constructor(props) {
        this.node = props.node;

        // TODO: Init gamble modal btns here with passed nodes and click handlers
        this.btns = {
            red: new Button({
                node: this.node.querySelector('#red'),
                onClick: () => console.log('Pick red')
            }),
            heart: new Button({
                node: this.node.querySelector('#heart'),
                onClick: () => console.log('Pick heart')
            }),
            diamond: new Button({
                node: this.node.querySelector('#diamond'),
                onClick: () => console.log('Pick diamond')
            }),
            black: new Button({
                node: this.node.querySelector('#black'),
                onClick: () => console.log('Pick black')
            }),
            club: new Button({
                node: this.node.querySelector('#club'),
                onClick: () => console.log('Pick club')
            }),
            spade: new Button({
                node: this.node.querySelector('#spade'),
                onClick: () => console.log('Pick spade')
            }),
        }

        this.init();
    }

    init() {
        const cardsSuits = [
            'heart',
            'diamond',
            'club',
            'spade'
        ];

        // Randomize initial previous cards
        let randomedPreviousCards = [];
        for (let i = 0; i < settings.gamblePreviousCardsAmount; i++) {
            const randomedCardSuitIndex = Math.floor(Math.random() * cardsSuits.length);
            randomedPreviousCards.push(cardsSuits[randomedCardSuitIndex]);
        }

        // TODO: Place randomedPreviousCards in previous cards element in modal
    }

    show() {
        this.node.style.display = 'block';
    }

    hide() {
        this.node.style.display = 'none';
    }
}