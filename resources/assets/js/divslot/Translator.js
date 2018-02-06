import CookieController from './Controllers/CookieController';
import translations from './../translations';

// Get correct language
const LANG = CookieController.get('lang') ? CookieController.get('lang') : 'en';
// Get phrases translation for correct language
// Get english translation in old games
const PHRASES = (settings.gameType === 'old') ? translations['en'] : translations[LANG];

export default class Translator {
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

    static currentBonusSpin(current, total) {
        switch (LANG) {
            default: {
                return `${PHRASES.bonusSpin} ${current} ${PHRASES.of} ${total}`;
            }
        }
    }

    static wonBonusSpins(spinsAmount) {
        switch (LANG) {
            default: {
                return `${PHRASES.youWon} ${spinsAmount} ${PHRASES.bonusSpins}`;
            }
        }
    }

    static wonMoreBonusSpins(spinsAmount) {
        switch (LANG) {
            default: {
                return `${PHRASES.youWon} ${spinsAmount} ${PHRASES.more} ${PHRASES.bonusSpins}`;
            }
        }
    }

    static wonSubstitution(spinsAmount) {
        switch (LANG) {
            default: {
                return `${PHRASES.youWon} ${spinsAmount} ${PHRASES.bonusSpins} ${PHRASES.withSubstitution}`;
            }
        }
    }

    static bonusSpinsEnded(points) {
        switch (LANG) {
            default: {
                return `${PHRASES.bonusSpinsIm} ${PHRASES.ended}. ${PHRASES.youWon} ${points} ${PHRASES.credits}`;
            }
        }
    }

    static bonusSpinsEndedExtended(points, spinsAmount) {
        switch (LANG) {
            default: {
                return `${PHRASES.bonusSpinsIm} ${PHRASES.ended}, ${PHRASES.youWon} ${points} ${PHRASES.credits} ${PHRASES.in} ${spinsAmount} ${PHRASES.spins}`;
            }
        }
    }

    /**
     * Returns given phrase with correct translation
     * @param {String} keyword Phrase key word to translate
     * @returns {String} Translated phrase
     */
    static get(keyword) {
        if (keyword === undefined) {
            console.warn('No phrase given in get method of Translator');
            return undefined;
        } else {
            const phrase = PHRASES[keyword];
            if (!phrase) {
                console.warn(`No such phrase ${phrase} in Translator`);
            }
            return phrase;
        }
    }
}
