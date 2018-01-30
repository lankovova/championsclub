import axios from 'axios';

const playerInfoAPIUrl = '/getplayerinfo';
const spinAPIUrl = '/spin';
const gambleAPIUrl = '/gamble';

export default class APIController {
    static _handleRedirect(responseData) {
        if (responseData && responseData.redirect) {
            window.location.href = (responseData.redirect) ? responseData.redirect : '/';
        }
    }

    static getPlayerData() {
        return new Promise(async resolve => {
            try {
                const response = await axios.post(playerInfoAPIUrl);
                const responseData = response.data;

                console.log(responseData);
                this._handleRedirect(responseData);

                resolve(responseData);
            } catch(err) {
                console.log(err);
            }
        });
    }

    static getSpinData({linesAmount, betPerLine, denomination, gameName}) {
        return new Promise(async resolve => {
            try {
                const response = await axios.post(spinAPIUrl, {
                    lines_amount: linesAmount,
                    bet_per_line: betPerLine,
                    denomination: denomination,
                    game: gameName
                });
                const responseData = response.data;

                console.log(responseData);
                this._handleRedirect(responseData);

                resolve(responseData);
            } catch(err) {
                console.log(err);
            }
        });
    }

    static getGambleData(cardSuit) {
        return new Promise(async resolve => {
            try {
                const response = await axios.post(gambleAPIUrl, {card: cardSuit});
                const responseData = response.data;

                console.log(responseData);
                this._handleRedirect(responseData);

                resolve(responseData);
            } catch(err) {
                console.log(err);
            }
        });
    }
}