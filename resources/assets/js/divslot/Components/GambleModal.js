import Button from './buttons/Button';
import {capitalize} from './../Helpers/stringHelper';

import axios from 'axios';

export default class GambleModal {
    constructor(props) {
        this.props = props;
        this.node = this.props.node;

        this.previousCards = {
            node: this.node.querySelector('#previousCardsSuits'),
            _cards: [],
            add(cardSuit) {
                // Push card suit name to store
                this._cards.push(card);

                // Add to markup
                const cardToInsert = document.createElement('div');
                cardToInsert.className = `suit-${cardSuit}`;
                this.node.appendChild(cardToInsert);
            },
            removeOldest() {
                // Remove it from store
                this._cards.shift();

                // Remove oldest card from html markup
                this.node.removeChild(this.node.children[0]);
            }
        }

        // TODO: Handle if gamble is extended
        // Init gamble modal btns here with passed nodes and click handlers
        this.btns = {
            red: new Button({
                node: this.node.querySelector('#red'),
                onClick: () => this.pickCard('red')
            }),
            heart: new Button({
                node: this.node.querySelector('#heart'),
                onClick: () => this.pickCard('heart')
            }),
            diamond: new Button({
                node: this.node.querySelector('#diamond'),
                onClick: () => this.pickCard('diamond')
            }),
            black: new Button({
                node: this.node.querySelector('#black'),
                onClick: () => this.pickCard('black')
            }),
            club: new Button({
                node: this.node.querySelector('#club'),
                onClick: () => this.pickCard('club')
            }),
            spade: new Button({
                node: this.node.querySelector('#spade'),
                onClick: () => this.pickCard('spade')
            }),
        }

        this._initializePreviousCards();
    }

    _initializePreviousCards() {
        const cardsSuits = [
            'heart',
            'diamond',
            'club',
            'spade'
        ];

        // Randomize initial previous cards
        for (let i = 0; i < settings.gamblePreviousCardsAmount; i++) {
            const randomedCardSuitIndex = Math.floor(Math.random() * cardsSuits.length);
            this.previousCards.add(cardsSuits[randomedCardSuitIndex]);
        }
    }

    show() {
        this.node.style.display = 'block';
    }

    hide() {
        this.node.style.display = 'none';
    }

    disableBtns() {
        Object.keys(this.btns).forEach(btn => this.btns[btn].disable());
    }

    enableBtns() {
        Object.keys(this.btns).forEach(btn => this.btns[btn].enable());
    }

    async getGambleResponse(cardSuit) {
        try {
            return (await axios.post('http://admin.chcgreen.org/gamble', {
                card: cardSuit
            })).data;
        } catch(err) {
            console.log(err);
        }
    }

    pickCard = async (cardSuit) => {
        // Disable gamble btns
        this.disableBtns();

        const gambleResponse = await this.getGambleResponse(cardSuit);
        console.log(gambleResponse);

        // Change flipping card suit
        const droppedBigCard = this.node.querySelector(`#suit${capitalize(gambleResponse.rand_card)}`);
        droppedBigCard.style.zIndex = 1;

        // Add randomed card to previous cards
        this.previousCards.add(gambleResponse.rand_card);

        if (gambleResponse.won) {
            // Update win field from Game
            this.props.gambleWin(gambleResponse.won_coins);

            // After one second setup gamble to one more pick
            await (() => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        console.log('Remove oldest card');
                        // Remove oldest previous card
                        this.previousCards.removeOldest();

                        // Start flipping card back
                        droppedBigCard.style.zIndex = '';

                        // Enable gamble btns
                        this.enableBtns();

                        this.props.gambleReadyToPick();

                        resolve();
                    }, 700);
                });
            })();
        } else {
            this.props.gambleLose();

            await (() => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        // Hide gamble modal
                        this.hide();

                        // Start flipping card back
                        droppedBigCard.style.zIndex = '';

                        resolve();
                    }, 1000);
                });
            })();
        }
    }

    // TODO: Create function called gambleStart wich will open gambleModal and enabling all buttons
}