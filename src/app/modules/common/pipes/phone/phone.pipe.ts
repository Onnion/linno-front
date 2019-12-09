import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phone: string, args?: any): string {
    let formated = '';

    if (phone) {
      formated = phone.length > 11 ? phone.slice(phone.length > 13 ? 4 : 2) : phone;
      formated = `(${formated.slice(0, 2)}) ${formated.slice(2, 6)}-${formated.slice(6)}`;
    }

    return formated;
  }

}
