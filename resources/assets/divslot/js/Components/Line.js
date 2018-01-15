class Line {
    /**
     * @param {HTMLElement} containerNode node of element where svg will be appended
     * @param {String} strokeColor color of the line
     * @param {Number} lineTypeNumber index of the settings.lineTypes
     * @param {Array} reels reel objects
     */
    constructor(containerNode, strokeColor, lineTypeNumber, points, reels) {
        this.namespaceURI = "http://www.w3.org/2000/svg";
        this.strokeWidth = 7;
        this.strokeColor = strokeColor;
        this.rectNodes = [];
        this.container = containerNode;
        this.lineTypeNumber = lineTypeNumber;
        this.lineType = settings.lineTypes[lineTypeNumber];
        this.reels = reels;

        this.points = points;

        this.svgNode = document.createElementNS(this.namespaceURI, 'svg');
        this.container.appendChild(this.svgNode);

        this.svgNode.style.width = `calc(100% - ${settings.spaceBetweenReels}px)`;
        this.svgNode.style.height = "100%";
        this.svgNode.style.display = "none";
        this.svgNode.style.position = "absolute";
        this.svgNode.style.right = 0;
        this.svgNode.style.left = 0;
        this.svgNode.style.margin = "auto";
        this.svgNode.style.opacity = '0.8';
        this.svgNode.style.zIndex = "1";
    }

    show() {
        this.svgNode.style.display = "block";
    }

    hide() {
        this.svgNode.style.display = "none";
    }

    remove() {
        this.svgNode.remove();
    }
    /**
     * Create highlite around symbol
     * @param {Number} x symbols` position x
     * @param {Number} y symbols` position y
     */
    addSymbolHighlite(reel, symbol) {
        let rectNode = document.createElementNS(this.namespaceURI, 'rect');
        this.svgNode.appendChild(rectNode);
        this.rectNodes.push(rectNode);

        rectNode.setAttributeNS(null, "width", settings.symbolSize - this.strokeWidth);
        rectNode.setAttributeNS(null, "height", settings.symbolSize - this.strokeWidth);
        rectNode.setAttributeNS(null, "x", reel * (settings.symbolSize + settings.spaceBetweenReels) + (this.strokeWidth / 2));
        rectNode.setAttributeNS(null, "y", (symbol * settings.symbolSize ) + (this.strokeWidth / 2));
        rectNode.setAttributeNS(null, "stroke", this.strokeColor);
        rectNode.setAttributeNS(null, "fill", 'transparent');
        rectNode.setAttributeNS(null, "stroke-width", this.strokeWidth);
    }
    /**
     * Connect highlited symbols
     */
    connectHighlites() {
        let sPrev, symbol, sMap, rMap;

        for (let i = 0; i < settings.numOfReels; i++) {
            // Get symbol
            [sMap, rMap] = this.lineType[i];
            symbol = this.reels[rMap].finalSymbols[this.reels[rMap].finalSymbols.length - 1 - sMap];
            symbol.reelIndex = rMap;
            symbol.symbolIndex = sMap;

            if (!symbol.highlighted && i === (settings.numOfReels - 1)) {
                this._createLastConnection();
            } else if (!symbol.highlighted && i === 0) {
                this._createFirstConnection();
            }
            if (i !== 0) {
                // Get previous symbol
                [sMap, rMap] = this.lineType[i - 1];
                sPrev = this.reels[rMap].finalSymbols[this.reels[rMap].finalSymbols.length - 1 - sMap];
                sPrev.reelIndex = rMap;
                sPrev.symbolIndex = sMap;
                symbol

                this._createConnection(sPrev, symbol);
            }

        }
    }

    _createFirstConnection() {
        let start = {
            x: 0,
            y: this.lineType[0][0] * settings.symbolSize + settings.symbolSize / 2
        }
        let end = {
            x: settings.symbolSize / 2,
            y: this.lineType[0][0] * settings.symbolSize + settings.symbolSize / 2
        }

        this._setLineAttrs(start, end);
    }

    _createLastConnection() {
        let start = {
            x: (settings.symbolSize + settings.spaceBetweenReels) * settings.numOfReels - settings.symbolSize / 2 - settings.spaceBetweenReels,
            y: this.lineType[settings.numOfReels - 1][0] * settings.symbolSize + settings.symbolSize / 2
        }
        let end = {
            x: (settings.symbolSize + settings.spaceBetweenReels) * settings.numOfReels - settings.spaceBetweenReels,
            y: this.lineType[settings.numOfReels - 1][0] * settings.symbolSize + settings.symbolSize / 2
        }

        this._setLineAttrs(start, end);
    }

    _createConnection(sPrev, symbol) {
        let start = {};
        let end = {};

        start.x = sPrev.highlighted ? 
            ((sPrev.reelIndex + 1) * (settings.symbolSize + settings.spaceBetweenReels)) - settings.spaceBetweenReels : 
            ((sPrev.reelIndex + 1) * (settings.symbolSize + settings.spaceBetweenReels)) - settings.spaceBetweenReels - settings.symbolSize / 2;

        end.x = symbol.highlighted ? 
            ((symbol.reelIndex + 1) * (settings.symbolSize + settings.spaceBetweenReels)) - settings.spaceBetweenReels - settings.symbolSize: 
            ((symbol.reelIndex + 1) * (settings.symbolSize + settings.spaceBetweenReels)) - settings.spaceBetweenReels - settings.symbolSize / 2;

        start.y = sPrev.symbolIndex * settings.symbolSize + settings.symbolSize / 2;
        end.y = symbol.symbolIndex * settings.symbolSize + settings.symbolSize / 2;

        if (symbol.highlighted) {
            // symbol below prev
            if (symbol.symbolIndex > sPrev.symbolIndex) {
                end.y -= settings.symbolSize / 4;
            // symbol under prev
            } else if (symbol.symbolIndex < sPrev.symbolIndex) {
                end.y += settings.symbolSize / 4;
            }
            // fix so lines cross pretty
            end.x += 3;
        }
        if (sPrev.highlighted) {
            // symbol below prev
            if (symbol.symbolIndex > sPrev.symbolIndex) {
                start.y += settings.symbolSize / 4;
            // symbol under prev
            } else if (symbol.symbolIndex < sPrev.symbolIndex) {
                start.y -= settings.symbolSize / 4;
            }
            // fix so lines cross pretty
            start.x -= 3;
        }

        this._setLineAttrs(start, end);
    }

    _setLineAttrs(start, end) {
        let lineNode = document.createElementNS(this.namespaceURI, 'line');
        this.svgNode.appendChild(lineNode);

        lineNode.setAttributeNS(null, "x1", start.x);
        lineNode.setAttributeNS(null, "y1", start.y);
        lineNode.setAttributeNS(null, "x2", end.x);
        lineNode.setAttributeNS(null, "y2", end.y);
        lineNode.setAttributeNS(null, "stroke", this.strokeColor);
        lineNode.setAttributeNS(null, "stroke-width", this.strokeWidth);
        lineNode.setAttributeNS(null, "stroke-linecap", 'round');
    }

    _lineWidth() {
        return this.container.offsetWidth;
    }

    _lineHeight() {
        return this.container.offsetHeight;
    }
}

export default Line