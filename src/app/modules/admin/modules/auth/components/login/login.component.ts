import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/common/services/auth/auth.service';
import { isLoggedIn } from 'src/app/app.utils';
import { ROLES_ACL } from 'src/app/app.roles';
import { FormBuilderValidators } from 'src/app/modules/common/validators/form-builder/form-builder.validators';

@Component({
    selector: 'app-login-cmp',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    public loading = false;
    public form: FormGroup;

    constructor(
        private customValidators: FormBuilderValidators,
        private authService: AuthService,
        private fb: FormBuilder,
        private router: Router) {
    }

    public submit() {
        if (!this.loading && this.form.valid) {
            this.loading = true;
            const form = this.form.value;
            this.authService.handleLogin({ ...form, context: 'admin' }).subscribe(
                () => {
                    this.router.navigate(['/admin/painel'])
                },
                () => this.loading = false
            );
        }
    }

    private initFormControls(): void {
        this.form = this.fb.group({
            email: ['marcio.hsdl@gmail.com', [Validators.required, this.customValidators.emailFormat]],
            password: ['secret', [Validators.required]]
        });
    }

    ngOnInit() {
        this.initFormControls();

        if (isLoggedIn('admin')) {
            this.router.navigate([`/${ROLES_ACL[this.authService.getDataUser('admin').role_id][localStorage.getItem('context')]}`]);
        }
    }
}
