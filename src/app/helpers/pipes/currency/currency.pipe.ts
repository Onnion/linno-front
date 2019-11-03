import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class CurrencyPipe implements PipeTransform {

  inPipe(price: string): string {
    return parseFloat(price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }

  reMount(price: any): string {
    console.log(price);
    const _price = price.toString().replace(',', '.').replace(/[^0-9\d\.:]/g, '');
    console.log(_price);

    return _price || '0.0';
  }

  transform(price: any, args?: any): string {
    const remounted = this.reMount(price);
    return !remounted ? 'R$ 0,00' : this.inPipe(remounted);
  }

}
