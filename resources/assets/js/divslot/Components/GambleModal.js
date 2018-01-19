import GambleBtn from './buttons/GambleBtn';
import {capitalize} from './../Helpers/stringHelper';

import {gambleWin as gambleWinAPI} from './../MockAPI/gamble';

import axios from 'axios';

export default class GambleModal {
    constructor(props) {
        this.props = props;
        this.node = this.props.node;

        this.isOn = false;

        this.previousCards = {
            node: this.node.querySelector('#previousCardsSuits'),
            add(cardSuit) {
                // Add to markup
                const cardToInsert = document.createElement('div');
                cardToInsert.className = `suit-${cardSuit}`;
                this.node.appendChild(cardToInsert);
            },
            removeOldest() {
                // Remove oldest card from html markup
                this.node.removeChild(this.node.children[0]);
            }
        }

        const redOverlayColor = 'rgba(255,0,0,0.3)';
        const blueOverlayColor = 'rgba(0,0,255,0.3)';

        // TODO: Handle if gamble is extended
        // Init gamble modal btns here with passed nodes and click handlers
        this.btns = {
            red: new GambleBtn({
                node: this.node.querySelector('#red'),
                onClick: this.props.pickSuit('red'),
                overlayColor: redOverlayColor
            }),
            heart: new GambleBtn({
                node: this.node.querySelector('#heart'),
                onClick: this.props.pickSuit('heart'),
                overlayColor: redOverlayColor
            }),
            diamond: new GambleBtn({
                node: this.node.querySelector('#diamond'),
                onClick: this.props.pickSuit('diamond'),
                overlayColor: redOverlayColor
            }),
            black: new GambleBtn({
                node: this.node.querySelector('#black'),
                onClick: this.props.pickSuit('black'),
                overlayColor: blueOverlayColor
            }),
            club: new GambleBtn({
                node: this.node.querySelector('#club'),
                onClick: this.props.pickSuit('club'),
                overlayColor: blueOverlayColor
            }),
            spade: new GambleBtn({
                node: this.node.querySelector('#spade'),
                onClick: this.props.pickSuit('spade'),
                overlayColor: blueOverlayColor
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
        this.isOn = true;
        this.node.style.display = 'block';
    }

    hide() {
        this.isOn = false;
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

    pickCard = (cardSuit) => {
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

            // After delay setup gamble to one more pick
            setTimeout(() => {
                // Remove oldest previous card
                this.previousCards.removeOldest();

                // Start flipping card
                droppedBigCard.style.zIndex = '';

                this.setValues(gambleResponse.won_coins);

                // Enable gamble btns
                this.enableBtns();

                this.props.gambleReadyToPick();

            }, 1500);
        } else {
            this.props.gambleLose();

            this.setValues(0);

            setTimeout(() => {
                // Hide gamble modal
                this.hide();

                // Start flipping card
                droppedBigCard.style.zIndex = '';

                this.props.gambleOver();
            }, 1500);
        }
    }

    /**
     * Start gamble
     * @param {Number} currentWin Current user win points
     */
    start(currentWin) {
        this.props.gambleReadyToPick();

        // Enable gamble buttons
        this.enableBtns();

        // Set gamble values
        this.setValues(currentWin);

        // Show modal
        this.show();
    }

    setValues(points) {
        document.querySelector('#gameAmountValue').innerHTML = points;
        document.querySelector('#gambleToWinColor').innerHTML = points * 2;
        document.querySelector('#gambleToWinSuit').innerHTML = points * 4;
    }
}