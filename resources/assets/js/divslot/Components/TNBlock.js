export default class TNBlock {
    constructor(props) {
        this.node = props.node;
        this.titleNode= this.node.querySelector('.title');
        this.pointsNode = this.node.querySelector('.points');
        this.kupsNode = this.node.querySelector('.kups');
    }

    setTitle(newTitle) {
        this.titleNode.innerText = newTitle;
    }

    setValues({points, kups}) {
        this.pointsNode.innerText = points;
        this.kupsNode.innerText = `${kups.toFixed(2)} Kup`;
    }


}