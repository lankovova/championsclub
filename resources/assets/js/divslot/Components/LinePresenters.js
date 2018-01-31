import LinePresenter from './LinePresenter';

export default class LinePresenters {
    constructor({lines, containerNode}) {
        this.linePresenters = [];

        this.lines = lines;
        this.container = containerNode;

        if (settings.gameType === 'old') {
            this.linePresenterLeftLines = settings.linePresenter;
            this.linePresenterRightLines = settings.linePresenter;
        } else {
            this.linePresenterLeftLines = settings.linePresenterLeftLines;
            this.linePresenterRightLines = settings.linePresenterRightLines;
        }
        
        this._init();
    }

    /**
     * Set bet per line value to specific line presenters
     * @param {Number} linesAmount Amount of lines to set bet per line
     * @param {Number} betPerLine Bet per line to set in presenters
     */
    setText = (linesAmount, betPerLine) => {
        this.linePresenters.forEach(presenter => {
            presenter.text = (presenter.line.lineTypeNumber < linesAmount)
                                ? betPerLine
                                : '';
        });
    }

    _init() {
        const pLeft = document.createElement('div');
        this.container.prepend(pLeft);
        pLeft.className += 'line_presenters_container left';

        const pRight = document.createElement('div');
        this.container.appendChild(pRight);
        pRight.className += 'line_presenters_container right';

        for (const presenterInfo of this.linePresenterLeftLines) {
            const presenter = new LinePresenter(this.lines[presenterInfo.lineIndex], presenterInfo.color);
            pLeft.appendChild(presenter.node);
            this.linePresenters.push(presenter);
        }

        for (const presenterInfo of this.linePresenterRightLines) {
            const presenter = new LinePresenter(this.lines[presenterInfo.lineIndex], presenterInfo.color);
            pRight.appendChild(presenter.node);
            this.linePresenters.push(presenter);
        }
    }

}
