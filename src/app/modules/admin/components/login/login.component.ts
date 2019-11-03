import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilderValidators } from 'src/app/validators';
import { ROLES_ACL } from 'src/app/app.roles';
import { AuthService } from 'src/app/modules/common/services/auth/auth.service';
import { NotifyService } from '../../services/notify/notify.service';
import { isLoggedIn } from 'src/app/app.utils';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public btn_title: string;
  public tokens: object;
  public user: any;
  public status = { 'loading': false };
  public form: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private notify: NotifyService,
    private customValidators: FormBuilderValidators) {
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
      const data = this.form.value;
      this.authService.handleLogin(data).subscribe(
        (loginUser) => {
          this.user = loginUser;
          this.router.navigate([`/${ROLES_ACL[this.user.role].path}`]);
          this.notify.show('success', 'Usuário logado com sucesso');
        },
        (error) => {
          this.controlStateLogin('error');
        });
    }
  }

  private initFormControls(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, this.customValidators.emailFormat]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    if (isLoggedIn()) {
      this.router.navigate([`/${ROLES_ACL[this.authService.getDataUser().role].path}`]);
    }

    this.initFormControls();
    this.btn_title = 'Entrar';
  }
}
