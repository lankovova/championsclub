import TNBlock from "./TNBlock";

export default class TNWinBlock extends TNBlock {
    constructor(props) {
        super(props);
    }

    setWin({points, kups}) {
        this.setTitle('Win');
        this.setValues({points, kups});
    }

    setPreviousWin({points, kups}) {
        this.setTitle('Paid');
        this.setValues({points, kups});
    }
}