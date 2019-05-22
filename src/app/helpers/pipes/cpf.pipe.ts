import { Pipe, PipeTransform } from '@angular/core';
import { maskFormat } from '../../utils/mask.utils';
import { masks } from '../consts/consts.helpers';

@Pipe({
  name: 'code_ax'
})
export class CodeAxPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return maskFormat(value, masks.CODE_AX);
  }

}
