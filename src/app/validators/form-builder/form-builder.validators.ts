import { validEmail, validName } from '../regex/regex.validator';
import { FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { validCpf } from 'src/app/helpers/validators/cpf/cpf.validator';

@Injectable()
export class FormBuilderValidators {

  constructor () { }

  public emailFormat(control: FormControl): {[key: string]: boolean} {
    return validEmail(control.value) ? null : {'emailFormat': true};
  }

  public nameFormat(control: FormControl): {[key: string]: boolean} {
    return validName(control.value) ? null : {'nameFormat': true};
  }

  public cpfFormat(control: FormControl): { [key: string]: boolean } {
    return validCpf(control.value) ? null : { 'nameFormat': true };
  }
}
