export default class TNBlock {
    constructor(props) {
        this.node = props.node;
        this.titleNode= this.node.querySelector('.title');
        this.pointsNode = this.node.querySelector('.points');
        this.kupsNode = this.node.querySelector('.kups');

        this.setTitle(props.title);
    }

    setTitle(title) {
        if (title) {
            this.titleNode.innerText = title;
        }
    }

    setValues({points, kups}) {
        this.pointsNode.innerText = points;
        this.kupsNode.innerText = `${kups.toFixed(2)} Kup`;
    }
}