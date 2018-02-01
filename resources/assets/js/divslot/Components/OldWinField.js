import TitleValue from "./TitleValue";
import Translator from "../Translator";

export default class OldWinField extends TitleValue {
    constructor(props) {
        super(props);
    }

    setWin(value) {
        this.title = Translator.win;
        this.value = value;
    }

    setPreviousWin(value) {
        this.title = Translator.paid;
        this.value = value;
    }
}