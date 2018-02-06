import TitleValue from "./TitleValue";
import Translator from "../Translator";

export default class OldWinField extends TitleValue {
    constructor(props) {
        super(props);
    }

    setWin(value) {
        this.title = Translator.get('win');
        this.value = value;
    }

    setPreviousWin(value) {
        this.title = Translator.get('paid');
        this.value = value;
    }
}