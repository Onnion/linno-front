import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
    selector: 'app-layout-client',
    templateUrl: './client-layout.component.html'
})
export class ClientLayoutComponent implements OnInit {

    constructor(private router: Router, private authService: AuthService) {
    }

    ngOnInit() {
        if (this.authService.isLoggedIn()) {
            this.router.navigate(['/dashboard']);
        }
    }

}
