import TNBlock from "./TNBlock";
import Translator from './../Translator';

export default class TNWinBlock extends TNBlock {
    constructor(props) {
        super(props);
    }

    setWin({points, kups}) {
        this.setTitle(Translator.win);
        this.setValues({points, kups});
    }

    setPreviousWin({points, kups}) {
        this.setTitle(Translator.paid);
        this.setValues({points, kups});
    }
}