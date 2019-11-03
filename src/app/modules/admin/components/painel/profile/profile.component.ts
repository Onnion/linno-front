import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotifyService } from '../../../services/notify/notify.service';
import { SingularService } from '../../../services/entites/singular/singular.service';
import * as moment from 'moment';
import { AuthService } from 'src/app/modules/common/services/auth/auth.service';

class PasswordValidation {
  static valid(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirm_password');

    const passwordVal = password.value;
    const confirmPasswordVal = confirmPassword.value;

    if ((passwordVal && confirmPasswordVal) && confirmPasswordVal === passwordVal) {
      password.setErrors(null);
      confirmPassword.setErrors(null);
      return null;

    } else {
      password.setErrors({ dontMatch: true });
      confirmPassword.setErrors({ dontMatch: true });

      return { invalidCpf: true };

    }
  }
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  public form: FormGroup;
  public user: any;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private notify: NotifyService,
    private singularService: SingularService) {
  }

  private initFormControls(): void {
    this.form = this.fb.group({
      name: [{ value: this.user.name, disabled: true }, [Validators.required]],
      birthdate: [{ value: moment(this.user.birthdate).format('DD/MM/YYYY'), disabled: true }, [Validators.required]],
      email: [{ value: this.user.email, disabled: true }, [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', [Validators.required, Validators.minLength(6)]]
    }, {
      validator: (form: FormGroup) => PasswordValidation.valid(form)
    });
  }

  public submit(): void {
    if (this.form.valid) {
      const controls = this.form.controls;

      this.singularService.updatePassword(controls.password.value).subscribe(
        (password) => {
          this.notify.show('success', 'Senha alterada com sucesso');
        },
        (error) => {
        }
      );

    }

  }

  ngOnInit() {
    this.user = this.auth.getDataUser();
    this.initFormControls();

  }
}
