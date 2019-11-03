import * as _ from 'lodash';
import * as moment from 'moment';

export function eraseCookie(...name): void {
    name.forEach(e => {
        document.cookie = e + '=123;max-age=0;';
    });
}

export function getObjectCookie(cname: string): { timeLogin: number, token: { access_token: string, expires_in: number, token_type: string, refres_token: string } } {
    const cookie = getCookie(cname);
    return cookie ? JSON.parse(cookie) : undefined;
}

export function getCookie(cname: string): string {
    const name = cname + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}

export const isValidCpf = (cpf_cnpj): boolean => {

    const value = (cpf_cnpj).replace(/\D/g, '');
    const tam = (value).length;

    if (!(tam === 11 || tam === 14)) {
        return false;
    }

    // se for CPF
    if (tam === 11) {
        if (!validaCPF(value)) {
            return false;
        }
        return true;
    }

    // se for CNPJ
    if (tam === 14) {
        if (!validaCNPJ(value)) {
            return false;
        }
        return true;
    }

};

function validaCPF(s): boolean {
    const c = s.substr(0, 9);
    const dv = s.substr(9, 2);
    let d1 = 0;

    for (let i = 0; i < 9; i++) {
        d1 += c.charAt(i) * (10 - i);
    }
    if (d1 === 0) {
        return false;
    }
    d1 = 11 - (d1 % 11);
    if (d1 > 9) {
        d1 = 0;
    }
    if (dv.charAt(0) !== d1) {
        return false;
    }
    d1 *= 2;
    for (let i = 0; i < 9; i++) {
        d1 += c.charAt(i) * (11 - i);
    }
    d1 = 11 - (d1 % 11);
    if (d1 > 9) {
        d1 = 0;
    }

    return !(dv.charAt(1) !== d1);
}

function validaCNPJ(CNPJ) {
    const a = [];
    const c = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    let b = 0;
    let x;

    for (let i = 0; i < 12; i++) {
        a[i] = CNPJ.charAt(i);
        b += a[i] * c[i + 1];
    }

    if ((x = b % 11) < 2) {
        a[12] = 0;
    } else {
        a[12] = 11 - x;
    }

    b = 0;

    for (let y = 0; y < 13; y++) {
        b += (a[y] * c[y]);
    }

    if ((x = b % 11) < 2) {
        a[13] = 0;
    } else {
        a[13] = 11 - x;
    }

    if ((CNPJ.charAt(12) !== a[12]) || (CNPJ.charAt(13) !== a[13])) {
        return false;
    }

    return true;
}

export const cleanUp = (value: string) => {
    return value.replace(/\D/g, '');
};

export const getDataUser = (): any => {
    return getObjectCookie('linno_user_data');
};

export const getToken = (): { timeLogin: number, token: { access_token: string, expires_in: number, token_type: string, refres_token: string } } => {
    return getObjectCookie('linno_token');
};

export const transformCurrency = (value: string) => {
    return parseFloat(parseFloat(value.toString().replace(/[\$\R]/g, '').replace(',', '.')).toFixed(2));
};

export const isLoggedIn = (): boolean => {

    moment.locale('pt-br');

    const tokenString: string = getCookie('linno_token') || '{}';
    const userString: string = getCookie('linno_user_data') || '{}';
    const token: any = JSON.parse(tokenString);
    const user: any = JSON.parse(userString);

    let result: boolean;

    try {
        if ((token && token.token && token.token.access_token) && (user && user.id)) {
            const timeExpire = moment(parseInt(token.timeLogin, 10)).add(parseInt(token.token.expires_in, 10), 'seconds');
            const isTokenExpired = timeExpire.isBefore(moment());
            result = token.token.access_token != null && !isTokenExpired;
        }
    } catch (error) {
        result = false;
    }

    return result;
};

export const setRedirect = (role: any): void => {
    localStorage.removeItem('redirect');
    localStorage.setItem('redirect', role.path);
};

export const getRedirect = (): string => {
    return localStorage.getItem('redirect');
};
