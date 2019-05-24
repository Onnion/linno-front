import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../services/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotifyService } from '../../../../services/notify/notify.service';
import { FormBuilderValidators } from '../../../../validators';
import { ROLES_ACL } from '../../../../app.roles';

@Component({
    selector: 'app-login-cmp',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public btn_title: string;
    public user: any;
    public status = { loading: false };
    public form: FormGroup;

    constructor(
        private authService: AuthService,
        private fb: FormBuilder,
        private router: Router,
        private notify: NotifyService,
        private customValidators: FormBuilderValidators,
        private activeRoute: ActivatedRoute
        ) {
    }

    private controlStateLogin(state: string): void {
        if (state === 'loading') {
            this.status.loading = true;
            this.btn_title = 'Entrando';
        } else {
            this.status.loading = false;
            this.btn_title = 'Entrar';
        }
    }

    public submit() {
        if (!this.status.loading && this.form.valid) {
            
            this.controlStateLogin('loading');
            const redirect = this.activeRoute.snapshot.params['redirect'];
            const data = this.form.value;
            this.authService.loginUser(data.email, data.password, redirect).subscribe(
                (res) => { },
                (error) => { this.controlStateLogin('error'); });
        }
    }

    private initFormControls(): void {
        this.form = this.fb.group({
            email: ['', [Validators.required, this.customValidators.emailFormat]],
            password: ['', [Validators.required]]
        });
    }

    ngOnInit() {
        if (this.authService.isLoggedIn()) {
            console.log('ngOnInit login')
            this.router.navigate([`/${ROLES_ACL[this.authService.getDataUser().type].path}`]);
        }
        this.initFormControls();
        this.btn_title = 'Entrar';
    }
}
