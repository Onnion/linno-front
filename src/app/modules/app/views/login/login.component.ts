import { Component, OnInit, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
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

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
  }

  private initFormControls(): void {
    this.form = this.fb.group({
      email: ['marcio.hsdl@gmail.com', [Validators.required, Validators.email]],
      password: ['secret', [Validators.required]]
    });
  }

  public submit(): void {
    this.loading = true;
    if (this.form.valid) {
      this.auth.handleLogin(this.form.value).subscribe(
        () => {
          this.loading = false;
          this.router.navigate(['/app/app'])
        },
        () => alert('num foi :(')
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
    if (isLoggedIn()) {
      this.auth.redirectRole();

    }
    this.initFormControls();
  }

}
