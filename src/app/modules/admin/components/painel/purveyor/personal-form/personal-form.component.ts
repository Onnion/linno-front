import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import * as _ from 'lodash';
import { FormBuilderValidators } from 'src/app/validators';
import { UsersService } from 'src/app/modules/admin/services/entites/users/users.service';
import { NotifyService } from 'src/app/modules/admin/services/notify/notify.service';
import { cleanUp } from 'src/app/app.utils';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.css']
})
export class PersonalFormComponent implements OnInit {

  @Input() mode: string;
  @Input() data: any;
  @Input() edit: Observable<any>;
  @Output() saveUser: EventEmitter<any> = new EventEmitter<any>();

  public form: FormGroup;
  public userEdit: any;
  public editActivate = false;
  public submitForm = false;
  public today: Date;
  public status_form = {
    submit: false,
    email: { modify: false, error: false, loading: false },
    cpf_cnpj: { modify: false, error: false, loading: false },
    name: { modify: false, error: false, loading: false },
    birthdate: { modify: false, error: false, loading: false },
    role: { modify: false, error: false, loading: false }
  };


  constructor(
    private formBuilder: FormBuilder,
    private customValidators: FormBuilderValidators,
    private usersService: UsersService,
    private notify: NotifyService) { }


  private setInputInvalidError(formControlName: string, status: boolean) {
    this.form.controls[formControlName].setErrors(status ? { 'invalidInput': status } : null);
  }


  private createUserData() {
    let fields = {};

    if (this.mode === 'edit') {

      _.forEach(this.status_form, (value, field) => {
        if (value.modify) {

          let value_ = this.form.controls[field].value;
          value_ = field === 'birthdate' ? moment(value_, 'DD/MM/YYYY').format('YYYY-MM-DD') : value_;
          value_ = field === 'cpf_cnpj' ? cleanUp(value_) : value_;

          fields = {
            ...fields,
            [field]: value_
          };

        }
      });

    } else {

      fields = {
        ...fields,
        role: '2',
        email: this.form.controls.email.value,
        birthdate: moment(this.form.controls.birthdate.value, 'DD/MM/YYYY').format('YYYY-MM-DD'),
        name: this.form.controls.name.value,
        // password: this.form.controls.password.value,
        cpf_cnpj: cleanUp(this.form.controls.cpf_cnpj.value),
        password: cleanUp(this.form.controls.cpf_cnpj.value)
      };

    }

    return fields;
  }


  private initFormControlls(data: any = null): void {
    this.today = moment().toDate();
    const controls: any = {
      role: [data ? data.role.toString() : '2', [Validators.required]],
      email: [data ? data.email : '', [Validators.required, this.customValidators.emailFormat]],
      birthdate: [data ? data.birthdate : '', Validators.required],
      name: [data ? data.name : '', [Validators.required, this.customValidators.nameFormat]],
      cpf_cnpj: [data ? data.cpf_cnpj : '', [Validators.required, this.customValidators.cpfFormat]]
    };


    // if (this.mode !== 'edit') {
    //   controls = {
    //     ...controls,
    //     password: ['', Validators.required]
    //   };
    // }

    this.form = this.formBuilder.group(controls);
  }


  public modifyField(field: string) {
    this.status_form[field].modify = true;
  }


  public inputCheck(fctrlName: string): void {
    if (this.mode !== 'edit') {
      const serviceMethod = fctrlName === 'email' ? 'verifyEmail' : 'verifyCpfCnpj';
      const value = fctrlName === 'cpf_cnpj' ? cleanUp(this.form.controls[fctrlName].value) : this.form.controls[fctrlName].value;

      this.usersService[serviceMethod](value).subscribe(
        (inputCheck) => {
          if (inputCheck.data.count < 1) {
            if (this.form.controls[fctrlName].valid) {
              this.setInputInvalidError(fctrlName, false);
            }

          } else {
            this.setInputInvalidError(fctrlName, true);
            this.notify.show('error', inputCheck.data.message);
          }
        },
        (error) => {
          this.setInputInvalidError(fctrlName, true);
        }
      );
    }
  }


  public submit() {

    if (!this.status_form.submit) {
      this.status_form.submit = true;
      let data = this.createUserData();

      if (this.form.valid) {

        if (this.mode === 'edit') {
          data = {
            ...data,
            id: this.userEdit.id
          };
        }

        this.usersService[this.mode === 'edit' ? 'update' : 'store'](data).subscribe(
          (user) => {
            this.saveUser.emit(user.data);
            this.submitForm = true;
            this.notify.show('success', `Usuário ${this.mode === 'edit' ? 'atualizado' : 'cadastrado'} com sucesso`);

          },
          (err) => { this.submitForm = false; }
        );
      }
    }
  }

  public getSubmitName(): string {
    return this.mode === 'edit' ? 'Atualizar' : 'Cadastrar';

  }

  ngOnInit() {

    if (this.mode === 'edit') {
      this.edit.subscribe((editDataUser) => {
        this.editActivate = true;
        this.userEdit = editDataUser;
        this.initFormControlls(editDataUser);
        this.saveUser.emit(editDataUser);
      });

    } else {
      this.initFormControlls();

    }
  }

}
