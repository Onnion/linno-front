import { Token } from '../../models/token/token.model';

export function eraseCookie(...name): any {
  name.forEach(e => {
    document.cookie = e + '=123;max-age=0;';
  });
}

export function getObjectCookie(cname): any {
  const cookie = getCookie(cname);
  return cookie ? JSON.parse(cookie) : undefined;
}

export function getCookie(cname: string): string {
  let cookie = '';
  const name = cname + '=';
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    let c = cookies[i];

    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) === 0) {
      cookie = c.substring(name.length, c.length);
    }
  }
  return cookie;
}

export const cleanUp = (value: string) => {
  return value.replace(/\D/g, '');
};

// export const getDataUser = (): any => {
//   return getObjectCookie('parvi_cms_auth_user_data');
// };

// export const getToken = (): (Token & {timeLogin: number}) => {
//   return getObjectCookie('parvi_cms_auth_token');
// };

export const getDataUser = (context): any => {
  return getObjectCookie(`linno_user_data${context ? `_${context}` : ''}`);
};

export const getToken = (context): Token => {
  const token = getObjectCookie(`linno_token${context ? `_${context}` : ''}`);
  return token ? token.token : null;
};

export const setRedirect = (role: any): void => {
  localStorage.removeItem('redirect');
  localStorage.setItem('redirect', role[localStorage.getItem('context')]);
};

export const getRedirect = (): string => {
  return localStorage.getItem('redirect');
};
