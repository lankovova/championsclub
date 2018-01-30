import CookieController from './Controllers/CookieController';
import translations from './../translations';

function getTranslation() {
    const langFromCookie = CookieController.get('lang');
    // FIXME: Fix default language
    const lang = langFromCookie ? langFromCookie : 'ua';

    return translations[lang];
}

export default getTranslation();
