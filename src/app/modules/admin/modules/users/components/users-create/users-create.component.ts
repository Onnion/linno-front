import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/modules/common/services/users/users.service';
import { FormBuilderValidators } from 'src/app/modules/common/validators/form-builder/form-builder.validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent implements OnInit {
  public form: FormGroup;
  public loading = false;

  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private router: Router,
    private customValidators: FormBuilderValidators) { }

  private initFormControls(): void {
    this.form = this.fb.group({
      user: this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, this.customValidators.emailFormat]],
        password: ['', Validators.required],
        type: ['', Validators.required]
      }),
      company: this.fb.group({
        name: ['', Validators.required],
        trade_name: ['', Validators.required],
        phone_number: ['', Validators.required],
        registration_code: ['', Validators.required],
      }),
      address: this.fb.group({
        postal_code: ['', Validators.required],
        street: ['', Validators.required],
        number: ['', Validators.required],
        neighborhood: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        country: ['', Validators.required],
        complement: ['', Validators.required]
      }),
    });
  }

  public send(): void {
    if (this.form.valid) {
      this.loading = true;
      this.userService.saveUser(this.form.value).subscribe(
        () => {
          this.loading = false;
          this.router.navigate(['/admin/painel/usuarios']);
        },
        error => console.log(error)
      );
    }
  }

  public confirmError(): void {
    this.loading = false;
  }

  ngOnInit() {
    this.initFormControls();
  }
}
