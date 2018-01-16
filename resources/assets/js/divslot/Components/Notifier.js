class Notifier {
    constructor() {
        this._node = document.querySelector('#notifier');
        this._node.innerText = 'Welcome';
    }

    clear() {
        this._node.innerText = '';
    }

    set text(text) {
        this._node.innerText = text;
    }

    get node() {
        return this._node;
    }
}

export default Notifier;
