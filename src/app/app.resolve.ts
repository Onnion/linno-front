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
        if (type.toUpperCase() === 'UNAUTHORIZED') {
            this.router.navigate([getRedirect() || 'login']);
        }
    }
}


@Injectable()
export class AclResolver implements Resolve<any> {

    constructor(private aclService: AclService, private aclRedirection: AclRedirection) {
    }

    private match(state, path: any): boolean {
        return path.test(state.url);
    }

    private checkPermission(role: string): boolean {
        return this.aclService.can(ROLES[role][0]);
    }

    private routesToCheck() {
        return {
            'app': /^\/app\/app?[\D]+$/,
            'fabricator': /^\/app\/fabricator?[\D]+$/,
            'admin': /^\/admin?[\D]+$/
        }
    }

    private matchUrl(state: RouterStateSnapshot): Observable<boolean> {
        let testRoute: Observable<boolean>;
        
        if (this.match(state, this.routesToCheck().app) && this.checkPermission('distributor')) {
            testRoute = of(true);
        } else if (this.match(state, this.routesToCheck().fabricator) && this.checkPermission('fabricator')) {
            testRoute = of(true);

            // ADMIN RESOLVES
        } else if (this.match(state, this.routesToCheck().admin)) {
            testRoute = of(true);
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
