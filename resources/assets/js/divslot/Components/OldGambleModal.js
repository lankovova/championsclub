import GambleModal from "./GambleModal";

export default class OldGambleModal extends GambleModal {
    constructor(props) {
        super(props);
    }

    _initializePreviousCards() {
        super._initializePreviousCards();
        // Add suit back card after all
        this.previousCards.add('back');
    }

    showDroppedCard(randomSuit) {
        // Change flipping card suit
        this.bigCardNode.style.zIndex = 1;
        // Add randomed card to previous cards
        const suitBackNode = this.previousCards.node.querySelector('.suit-back');
        // Set suit back card bg ro randomed card
        suitBackNode.className = `suit-${randomSuit}`;
    }

    hideDroppedCard() {
        super.hideDroppedCard();
        // Add suit back card after all
        this.previousCards.add('back');
    }

}