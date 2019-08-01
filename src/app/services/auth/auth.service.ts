import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getObjectCookie, getCookie, getDataUser, setRedirect } from '../../app.utils';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { AclService } from 'ng2-acl';
import { ROLES_ACL } from 'src/app/app.roles';
import { User } from '../../models/user.model';
import * as moment from 'moment';
import * as _ from 'lodash';
import { FilterService } from '../filter/filter.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private http: HttpClient,
    private aclService: AclService,
    private filterService: FilterService
  ) { }

  public loginUser(username: string, password: string, $redirect: string): any {
    const grant_type: string = environment.GRANT_TYPE;
    const client_id: number = environment.CLIENT_ID;
    const client_secret: string = environment.CLIENT_SECRET;

    return new Observable((observer) => {
      const loginData = { username, password, grant_type, client_id, client_secret };

      this.http.post(`${environment.AUTH_URL}/oauth/token`, loginData).subscribe(
        (res) => {
          const token: string = JSON.stringify({ token: res, timeLogin: new Date().getTime() });
          this.createTokenData(token);
          this.getUserAuthenticated().subscribe(
            ($user: any) => {
              if ($user) {
                const user = JSON.stringify($user.data);
                const root = ROLES_ACL[$user.data.type].path;
                const redirect = this.getRedirectStrategy();

                this.createUserData(user);
                this.router.navigate([redirect ? `/${redirect}` : root]);
                this.eraseCookie('moura_redirect');

                observer.next(this.getDataUser());
              } else {
                this.logout();
                observer.error('no user');
              }
            },
            (error: any) => {
              observer.error(error.error);
            });
        },
        (error) => {
          observer.error(error.error);
        });
    });
  }

  public getUserAuthenticated(): Observable<any> {
    return this.http.get(`${environment.AUTH_URL}/api/moura/authenticated`);
  }

  private createUserData(user: string): void {
    this.eraseCookie('moura_auth_user_data');
    document.cookie = `moura_auth_user_data=${user};Max-Age=21600`;
    const user_request: User = JSON.parse(user);
    const userRole = ROLES_ACL[user_request.type].role;

    this.aclService.attachRole(userRole);
    setRedirect(ROLES_ACL[user_request.type]);
  }

  private createTokenData(token: string): void {
    this.eraseCookie('moura_auth_token');

    const objToken: any = JSON.parse(token);
    const expires: number = (_.isObject(objToken)) ? objToken.token.expires_in : 21600;

    document.cookie = `moura_auth_token=${token};Max-Age=${expires}`;
  }

  public getToken(): void | string {
    const jsonData: any = getObjectCookie('moura_auth_token');

    if (_.isEmpty(jsonData) && !_.isObject(jsonData)) {
      this.logout();
    } else {
      return jsonData.token.access_token;
    }
  }

  public getDataUser(): User {
    const user = getDataUser();

    if (_.isEmpty(user) && !_.isObject(user)) {
      this.logout();
    } else {
      return user;
    }
  }

  public isLoggedIn(): boolean {
    moment.locale('pt-br');

    const tokenString: string = getCookie('moura_auth_token') || '{}';
    const userString: string = getCookie('moura_auth_user_data') || '{}';
    const token: any = JSON.parse(tokenString);
    const user: any = JSON.parse(userString);
    const checkToken = token && token.token && token.token.access_token;
    const checkUser = user && user.id;
    let checkLogin: boolean;

    try {
      if (checkToken && checkUser) {
        const timeExpire = moment(parseInt(token.timeLogin, 10)).add(parseInt(token.token.expires_in, 10), 'seconds');
        const isTokenExpired = timeExpire.isBefore(moment());

        checkLogin = token.token.access_token != null && !isTokenExpired;
      }

    } catch {
      checkLogin = false;
    }

    return checkLogin;
  }

  public logout(): void {
    this.filterService.clear();
    this.eraseCookie('moura_auth_token');
    this.eraseCookie('moura_auth_user_data');
    this.router.navigate(['/login']);
    this.aclService.flushRoles();
    window.stop();
  }

  public redirectStrategy(redirect: string): void {
    this.eraseCookie('moura_redirect');

    if (redirect.toLowerCase() === 'cadastro' || 'ajuste') {
      document.cookie = `moura_redirect=${redirect.toLowerCase()}`;
    }
  }

  public getRedirectStrategy(): string {
    return getObjectCookie('moura_redirect');
  }

  private eraseCookie(...name): void {
    name.forEach(e => {
      document.cookie = e + '=123;max-age=0;';
    });
  }

}
