import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phone: string, args?: any): string {
    let number = ''
    number = phone.length > 11 ? phone.slice(phone.length > 13 ? 4 : 2) : phone;
    number = `(${number.slice(0, 2)}) ${number.slice(2)}`;

    return number;
  }

}
