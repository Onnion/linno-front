import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth/auth.service';
import {getRedirect} from '../../../app.utils';

@Component({
    selector: 'app-layout-auth',
    templateUrl: './auth-layout.component.html'
})
export class AuthLayoutComponent implements OnInit {

    constructor(private router: Router, private authService: AuthService) { }

    ngOnInit() {
        if (this.authService.isLoggedIn()) {
            this.router.navigate([getRedirect()]);
        }
    }

}
