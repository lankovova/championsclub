import APIController from './../Controllers/APIController';
import GambleModalButton from './buttons/GambleModalButton';
import {capitalize} from './../Helpers/stringHelper';
import Translator from '../Translator';

const redOverlayColor = 'rgba(255,0,0,0.3)';
const blueOverlayColor = 'rgba(0,0,255,0.3)';

class GambleTextField {
    constructor({node, title}) {
        this.node = node;

        if (this.node) {
            this.valueNode = this.node.querySelector('.value');
            this.titleNode = this.node.querySelector('.title');
        }

        // Set init values
        this.value = '-';
        this.title = title;
    }

    set value(value) {
        if (this.valueNode) this.valueNode.innerText = value;
    }
    set title(title) {
        if (this.titleNode) this.titleNode.innerText = title;
    }
};

export default class GambleModal {
    constructor(props) {
        this.props = props;
        this.node = this.props.node;

        this.isOn = false;

        this.bigCardNode;

        this.valuesFields = {
            amount: new GambleTextField({
                node: this.node.querySelector('#gambleAmount'),
                title: Translator.gambleAmount
            }),
            toWinColor: new GambleTextField({
                node: this.node.querySelector('#gambleToWinColor'),
                title: Translator.colorGambleToWin
            }),
            toWinSuit: new GambleTextField({
                node: this.node.querySelector('#gambleToWinSuit'),
                title: Translator.suitGambleToWin
            })
        }

        // Init previous cards
        this.previousCards = new (class {
            constructor(node) {
                this.node = node;
                this.titleNode = this.node.querySelector('.title');
                this.suitsNode = this.node.querySelector('.suits');

                this.title = Translator.previousCards;
            }

            set title(title) {
                if (this.titleNode) this.titleNode.innerText = title;
            }

            // Add to markup
            add(cardSuit) {
                const cardToInsert = document.createElement('div');
                cardToInsert.className = `suit-${cardSuit}`;
                this.suitsNode.appendChild(cardToInsert);
            }

            // Remove oldest card from html markup
            removeOldest() {
                this.suitsNode.removeChild(this.suitsNode.children[0]);
            }
        })(this.node.querySelector('#previousCards'));

        // Init gamble modal btns depending on extended gamble or not
        if (settings.gambleExtended) {
            this.btns = {
                red: new GambleModalButton({
                    node: this.node.querySelector('#red'),
                    onClick: this.props.pickSuit('red'),
                    overlayColor: redOverlayColor,
                    title: Translator.red
                }),
                heart: new GambleModalButton({
                    node: this.node.querySelector('#heart'),
                    onClick: this.props.pickSuit('heart'),
                    overlayColor: redOverlayColor
                }),
                diamond: new GambleModalButton({
                    node: this.node.querySelector('#diamond'),
                    onClick: this.props.pickSuit('diamond'),
                    overlayColor: redOverlayColor
                }),
                black: new GambleModalButton({
                    node: this.node.querySelector('#black'),
                    onClick: this.props.pickSuit('black'),
                    overlayColor: blueOverlayColor,
                    title: Translator.black
                }),
                club: new GambleModalButton({
                    node: this.node.querySelector('#club'),
                    onClick: this.props.pickSuit('club'),
                    overlayColor: blueOverlayColor
                }),
                spade: new GambleModalButton({
                    node: this.node.querySelector('#spade'),
                    onClick: this.props.pickSuit('spade'),
                    overlayColor: blueOverlayColor
                }),
            };
        } else {
            this.btns = {
                red: new GambleModalButton({
                    node: this.node.querySelector('#red'),
                    onClick: this.props.pickSuit('red'),
                    overlayColor: redOverlayColor,
                    title: Translator.red
                }),
                black: new GambleModalButton({
                    node: this.node.querySelector('#black'),
                    onClick: this.props.pickSuit('black'),
                    overlayColor: blueOverlayColor,
                    title: Translator.black
                })
            };
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
        // Disable modal btns
        Object.keys(this.btns).forEach(btn => this.btns[btn].disable());

        // Also disable panel btns
        this.props.disablePanelGambleBtns();
    }

    enableBtns() {
        // Enable modal btns
        Object.keys(this.btns).forEach(btn => this.btns[btn].enable());

        // Also enable panel btns
        this.props.enablePanelGambleBtns();
    }

    showDroppedCard(randomSuit) {
        // Change flipping card suit
        this.bigCardNode.style.zIndex = 1;

        // Add randomed card to previous cards
        this.previousCards.add(randomSuit);
    }

    hideDroppedCard() {
        // Remove oldest previous card
        this.previousCards.removeOldest();

        // Start flipping card
        this.bigCardNode.style.zIndex = '';
    }

    pickCard = async (cardSuit) => {
        // Disable gamble btns
        this.disableBtns();

        // Get response from server
        // const gambleResponse = await this.getGambleResponse(cardSuit);
        const gambleResponse = await APIController.getGambleData(cardSuit);

        this.bigCardNode = this.node.querySelector(`#suit${capitalize(gambleResponse.rand_card)}`);
        // Show randomed card in big card and add to previous cards
        this.showDroppedCard(gambleResponse.rand_card);

        if (gambleResponse.won) {
            // Update win field from Game
            this.props.gambleWin(gambleResponse.won_coins);

            // After delay setup gamble to one more pick
            setTimeout(() => {
                this.hideDroppedCard();

                this.setValues(gambleResponse.won_coins);

                // Enable gamble btns
                this.enableBtns();

                this.props.gambleReadyToPick();

            }, 1500);
        } else {
            this.props.gambleLose();

            this.setValues(0);

            setTimeout(() => {
                this.hideDroppedCard();

                // Start flipping card
                this.bigCardNode.style.zIndex = '';

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
        this.valuesFields.amount.value     = points;
        this.valuesFields.toWinColor.value = points * 2;
        this.valuesFields.toWinSuit.value  = points * 4;
    }
}
