import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AclService } from 'ng2-acl';
import { Injectable } from '@angular/core';
import { getRedirect } from 'src/app/app.utils';
import { ROLES } from 'src/app/app.roles';

@Injectable()
export class AclRedirection {

    constructor(private router: Router) {
    }

    public redirectTo(type: string) {
        if (type === 'Unauthorized') {
            this.router.navigate([getRedirect() || 'login']);
        }
    }
}


@Injectable()
export class AclResolver implements Resolve<any> {

    constructor(private aclService: AclService, private aclRedirection: AclRedirection) {
    }

    private match(state, path: any): boolean {
        return (typeof path === 'object') ? path.test(state.url) : state.url === path;
    }

    private matchUrl(state): any {
        let testRoute;

        if (this.match(state, /^\/app\/app?[\D]+$/)) {
            if (this.aclService.can(ROLES.distributor[0])) {
                testRoute = of(true);
            }
        } else if (this.match(state, /^\/app\/fabricator?[\D]+$/)) {
            if (this.aclService.can(ROLES.fabricator[0])) {
                testRoute = of(true);
            }
        }

        return testRoute;
    }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        if (this.matchUrl(state)) {
            return of(true);
        } else {
            this.aclRedirection.redirectTo('Unauthorized');
        }
    }
}
