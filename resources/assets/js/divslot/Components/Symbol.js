class Symbol {
    constructor(symbolNumber) {
        this.symbolNum = symbolNumber;
        this.highlighted = false;
        this.symbolNode;

        this.initSymbol();
    }

    initSymbol() {
        this.symbolNode = document.createElement('div');
        this.symbolNode.style.width = `${settings.symbolSize}px`;
        this.symbolNode.style.height = `${settings.symbolSize}px`;
        this.symbolNode.style.background = `url('${settings.symbolsImagesPath + settings.symbols[this.symbolNum].image}')`;
        this.symbolNode.style.backgroundSize = 'contain';
    }

    animate() {
        // If animation for this symbol exists then apply it
        if (settings.symbols[this.symbolNum].animation) {
            this.symbolNode.style.background = `url('${settings.symbolsAnimationsPath + settings.symbols[this.symbolNum].animation}')`;
            this.symbolNode.style.animation = 'symbolAnimation 1s steps(15) infinite';
        }
    }

    get node() {
        return this.symbolNode;
    }

    get x() {
        return this.symbolNode.getBoundingClientRect().left - document.querySelector('#reels_container').getBoundingClientRect().left;
    }

    get y() {
        return this.symbolNode.getBoundingClientRect().top - document.querySelector('#reels_container').getBoundingClientRect().top;
    }
}

export default Symbol;
