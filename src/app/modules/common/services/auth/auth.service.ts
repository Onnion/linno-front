import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getDataUser, setRedirect, eraseCookie } from '../../../../app.utils';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AclService } from 'ng2-acl';
import { ROLES_ACL } from 'src/app/app.roles';
import * as _ from 'lodash';

@Injectable()
export class AuthService {

  constructor(
    private router: Router,
    private http: HttpClient,
    private aclService: AclService,
  ) { }

  public handleLogin(data: { email: string, password: string, context: ('admin' | 'app'), confirm_password?: string }): any {
    return new Observable(observer => {
      this[data.hasOwnProperty('confirm_password') ? 'register' : 'login'](data).subscribe(
        () => observer.next(true),
        () => observer.error(false)
      );
    });
  }

  private login({ email, password, context }): Observable<any> {
    const grant_type: string = environment.GRANT_TYPE;
    const client_id: number = environment.CLIENT_ID;
    const client_secret: string = environment.CLIENT_SECRET;

    return new Observable((observer) => {
      const loginData = { username: email, password, grant_type, client_id, client_secret };

      this.http.post(`${environment.AUTH_URL}/oauth/token`, loginData).subscribe(
        (res) => {
          const token: string = JSON.stringify({ token: res, timeLogin: new Date().getTime() });
          this.createTokenData(token, context);
          this.getUserAuthenticated().subscribe(
            ($user: any) => {
              const user = JSON.stringify($user.data);
              this.createUserData(user, context);
              this.redirectRole(context);
              observer.next(this.getDataUser(context));
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

  public redirectRole(context): void {
    this.router.navigate([`/${ROLES_ACL[this.getDataUser(context).role_id].path}`]);
  }

  private getUserAuthenticated(): Observable<any> {
    return this.http.post(`${environment.AUTH_URL}/oauth/authenticated`, '');
  }

  private createUserData(user: string, context: string): void {
    eraseCookie(`linno_user_data${context ? `_${context}` : ''}`);
    document.cookie = `linno_user_data${context ? `_${context}` : ''}=${user};Max-Age=21600`;

    const user_request = JSON.parse(user);
    const userRole = ROLES_ACL[user_request.role_id].role;
    this.aclService.attachRole(userRole);

    setRedirect(ROLES_ACL[user_request.role_id]);
  }

  private createTokenData(token: string, context: string): void {
    eraseCookie(`linno_token${context ? `_${context}` : ''}`);

    const objToken: any = JSON.parse(token);
    const expires: number = (_.isObject(objToken)) ? objToken.token.expires_in : 21600;
    document.cookie = `linno_token${context ? `_${context}` : ''}=${token};Max-Age=${expires}`;
    localStorage.setItem('context', context);
  }

  getDataUser(context) {
    const user = getDataUser(context);

    return (_.isEmpty(user) && !_.isObject(user)) ? this.logout() : user;
  }

  logout(): void {
    eraseCookie('linno_token');
    eraseCookie('linno_user_data');
    this.router.navigate(['/']);
    this.aclService.flushRoles();
  }
}
