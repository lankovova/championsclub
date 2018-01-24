export default class Symbol {
    constructor(symbolNumber) {
        this.symbolNum = symbolNumber;
        this.highlighted = false;
        this.symbolNode;

        this.initSymbol();
    }

    get isScatter() {
        return (settings.symbols[this.symbolNum].isScatter) ? true : false;
    }

    initSymbol() {
        this.symbolNode = document.createElement('div');
        this.symbolNode.style.position = 'relative';
        this.symbolNode.style.width = `${settings.symbolSize}px`;
        this.symbolNode.style.height = `${settings.symbolSize}px`;
        this.symbolNode.style.backgroundImage = `url('${settings.symbolsImagesPath + settings.symbols[this.symbolNum].image}')`;
        this.symbolNode.style.backgroundSize = 'contain';

        this.overflowLayer = document.createElement('div');
        this.overflowLayer.style.position = 'absolute';
        this.overflowLayer.style.top = '0';
        this.overflowLayer.style.left = '0';
        this.overflowLayer.style.width = '100%';
        this.overflowLayer.style.height = '100%';
        this.symbolNode.appendChild(this.overflowLayer);
    }

    changeSymbol(symbolNum) {
        this.symbolNum = symbolNum;
        this.symbolNode.style.backgroundImage = `url('${settings.symbolsImagesPath + settings.symbols[symbolNum].image}')`;
    }

    animate() {
        // If animation for this symbol exists then apply it
        if (settings.symbols[this.symbolNum].animation) {
            this.symbolNode.style.background = `url('${settings.symbolsAnimationsPath + settings.symbols[this.symbolNum].animation}')`;
            this.symbolNode.style.animation = 'symbolAnimation 1s steps(15) infinite';
        }
    }

    blurDark() {
        this.overflowLayer.style.backgroundColor = 'rgba(0,0,0,0.6)';
    }
    unblur() {
        this.overflowLayer.style.backgroundColor = '';
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
