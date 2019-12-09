import { Pipe, PipeTransform } from '@angular/core';
import { maskFormat } from 'src/app/utils/mask.utils';
import { masks } from '../../consts/consts.helpers';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value ? maskFormat(value, masks.CPF) : value;
  }

}
