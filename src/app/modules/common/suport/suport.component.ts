import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from "../../../services/user/user.service";
import { SwalComponent } from '@toverux/ngx-sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suport',
  templateUrl: './suport.component.html',
  styleUrls: ['./suport.component.css']
})
export class SuportComponent implements OnInit {
  public form: FormGroup;
  public loading = false;

  @ViewChild("successSwal") private successSwal: SwalComponent;
  @ViewChild("errorSwal") private errorSwal: SwalComponent;

  constructor(private route: Router, private fb: FormBuilder, private userService: UserService) { }

  private initFormControls(): void {
    this.form = this.fb.group(
      {
        resale: [''],
        observation: ['', [Validators.required, Validators.minLength(3)]],
      }
    );
  }

  public goToPanel(): void {
    this.route.navigate(['/painel']);
  }

  public submit(): void {
    if (this.form.valid) {
      this.loading = true;
      this.userService.sendSuportContact(this.form.value).subscribe(
        (res) => {
          setTimeout(() => {
            this.loading = false;

            this.successSwal.show();
          }, 1000);
        },
        (error) => {
          console.log(error)
          setTimeout(() => {
            this.loading = false;

            this.errorSwal.show();
          }, 1000);
        }
      );
    }
  }

  ngOnInit() {
    this.initFormControls();
  }

}
