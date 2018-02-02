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

}