import Button from "./Button";
import CookieController from "../../Controllers/CookieController";

export default class LanguageBtn extends Button {
    constructor(props) {
        super(props);

        const langFromCookie = CookieController.get('lang');
        const lang = langFromCookie ? langFromCookie : 'en';
        this.setBg(lang);
    }

    setBg(countryName) {
        this.node.style.backgroundImage = `url(public/img/lang_flags/mini/${countryName}.png)`;
    }
}