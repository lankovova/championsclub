import Button from "./Button";

export default class LanguageBtn extends Button {
    constructor(props) {
        super(props);

        // FIXME: Set language dynamically from cookies
        this.setBg('en');
    }

    setBg(countryName) {
        this.node.style.backgroundImage = `url(public/img/lang_flags/mini/${countryName}.png)`;
    }
}