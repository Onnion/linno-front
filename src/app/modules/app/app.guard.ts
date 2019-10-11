import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { isLoggedIn } from 'src/app/app.utils';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private authService: AuthService) { }

    canActivate() {
        const loged = isLoggedIn();
        if (!loged) { this.authService.logout() }
        return loged;
    }
}
