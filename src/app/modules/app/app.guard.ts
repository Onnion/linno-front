import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../common/services/auth/auth.service';
import { isLoggedIn } from 'src/app/app.utils';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private authService: AuthService) { }

    canActivate() {
        const loged = isLoggedIn('app');
        if (!loged) { this.authService.logout() }
        return loged;
    }
}
