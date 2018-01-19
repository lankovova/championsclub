import GambleBtn from './buttons/GambleBtn';
import {capitalize} from './../Helpers/stringHelper';

import {gambleWin as gambleWinAPI} from './../MockAPI/gamble';

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
            red: new GambleBtn({
                node: this.node.querySelector('#red'),
                onClick: () => this.pickCard('red'),
                overlayColor: 'red'
            }),
            heart: new GambleBtn({
                node: this.node.querySelector('#heart'),
                onClick: () => this.pickCard('heart'),
                overlayColor: 'red'
            }),
            diamond: new GambleBtn({
                node: this.node.querySelector('#diamond'),
                onClick: () => this.pickCard('diamond'),
                overlayColor: 'red'
            }),
            black: new GambleBtn({
                node: this.node.querySelector('#black'),
                onClick: () => this.pickCard('black'),
                overlayColor: 'blue'
            }),
            club: new GambleBtn({
                node: this.node.querySelector('#club'),
                onClick: () => this.pickCard('club'),
                overlayColor: 'blue'
            }),
            spade: new GambleBtn({
                node: this.node.querySelector('#spade'),
                onClick: () => this.pickCard('spade'),
                overlayColor: 'blue'
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
            // const gambleResponse = await axios.post('http://admin.chcgreen.org/gamble', {
            //     card: cardSuit
            // });

            // return gambleResponse.data;
            return gambleWinAPI;
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

                        // Start flipping card
                        droppedBigCard.style.zIndex = '';

                        this.setValues(gambleResponse.won_coins);

                        // Enable gamble btns
                        this.enableBtns();

                        this.props.gambleReadyToPick();

                        resolve();
                    }, 1500);
                });
            })();
        } else {
            this.props.gambleLose();

            this.setValues(0);

            await (() => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        // Hide gamble modal
                        this.hide();

                        // Start flipping card
                        droppedBigCard.style.zIndex = '';

                        resolve();
                    }, 1500);
                });
            })();
        }
    }

    // Open gambleModal and enabling all buttons
    start(currentWin) {
        this.setValues(currentWin);
        this.show();
    }

    setValues(points) {
        document.querySelector('#gameAmountValue').innerHTML = points;
        document.querySelector('#gambleToWinColor').innerHTML = points * 2;
        document.querySelector('#gambleToWinSuit').innerHTML = points * 4;
    }
}