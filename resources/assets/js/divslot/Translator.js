import CookieController from './Controllers/CookieController';
import translations from './../translations';

function getTranslation() {
    const langFromCookie = CookieController.get('lang');
    const lang = langFromCookie ? langFromCookie : 'en';

    // Always return english translation if it is old game
    return (settings.gameType === 'old') ? translations['en'] : translations[lang];
}

export default getTranslation();

// TODO:
// Language
const LANG = CookieController.get('lang') ? CookieController.get('lang') : 'en';
// Always return english translation if it is old game
const PHRASES = (settings.gameType === 'old') ? translations['en'] : translations[LANG];

export class Translator {
    static userWonPoints(points) {
        switch (LANG) {
            case 'ru':
            case 'ua': {
                return `${PHRASES.win} ${points} ${PHRASES.credits}`;
                break;
            }
            default: {
                return `${points} ${PHRASES.credits} ${PHRASES.won}`;
            }
        }
    }
}
