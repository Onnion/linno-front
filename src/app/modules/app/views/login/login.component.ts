import { Component, OnInit, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../common/services/auth/auth.service';
import { Router } from '@angular/router';
import { isLoggedIn } from 'src/app/app.utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [FormBuilder]
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public register = false;
  public visibility: 'visibility_off' | 'visibility' = 'visibility'
  public loading = false;

  @HostBinding('style.display') display = 'flex';
  @HostBinding('style.flex') flex = '1';

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
  }

  private initFormControls(): void {
    this.form = this.fb.group({
      email: ['jane.doe@mail.com', [Validators.required, Validators.email]],
      password: ['secret', [Validators.required]]
    });
  }

  public submit(): void {
    this.loading = true;
    if (this.form.valid) {
      const data = {...this.form.value, context: 'app'};

      this.auth.handleLogin(data).subscribe(
        () => {
          this.loading = false;
          this.router.navigate(['/app/app'])
        },
        (error) => console.log(error)
      );
    }
  }

  public toggleRegister(): void {
    this.form.addControl('confirmPassword', this.fb.control('', [Validators.required]));
    setTimeout(() => this.register = !this.register, 300);
  }

  public toggleVisibility(): void {
    this.visibility = this.visibility === 'visibility' ? 'visibility_off' : 'visibility';
  }

  ngOnInit() {
    if (isLoggedIn('app')) {
      this.auth.redirectRole('app');
    }
    this.initFormControls();
  }

}
