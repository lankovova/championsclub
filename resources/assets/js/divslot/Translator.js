import CookieController from './Controllers/CookieController';
import translations from './../translations';

function getTranslation() {
    const langFromCookie = CookieController.get('lang');
    const lang = langFromCookie ? langFromCookie : 'en';

    // Always return english translation if it is old game
    return (settings.gameType === 'old') ? translations['en'] : translations[lang];
}

export default getTranslation();
