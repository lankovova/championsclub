export default class CookieController {
    static get(name) {
        if (document.cookie.length > 0) {
            let c_start = document.cookie.indexOf(name + '=');
            if (c_start !== -1) {
                c_start = c_start + name.length + 1;
                let c_end = document.cookie.indexOf(';', c_start);
                if (c_end === -1) {
                    c_end = document.cookie.length;
                }
                return unescape(document.cookie.substring(c_start, c_end));
            }
        }
        return undefined;
    }

    static set(name, value, days) {
        let expires;
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = `; expires=${date.toGMTString()}`;
        } else {
            expires = '';
        }
        document.cookie = `${name}=${value}${expires}; path=/`;
    }
}