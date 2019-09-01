import { validCpf } from '../cpf/cpf.validator';
import { FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { validEmail, validName } from '../regex/regex.validator';

@Injectable()
export class FormBuilderValidators {

  public emailFormat(control: FormControl): { [key: string]: boolean } {
    return validEmail(control.value) ? null : { validEmail: true };
  }

  public nameFormat(control: FormControl): { [key: string]: boolean } {
    return validName(control.value) ? null : { validName: true };
  }

  public cpfFormat(control: FormControl): { [key: string]: boolean } {
    return validCpf(control.value) ? null : { validCpf: true };
  }
}
