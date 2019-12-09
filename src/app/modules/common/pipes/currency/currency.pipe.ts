import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'price'
})
export class CurrencyPipe implements PipeTransform {

    transform(price: any, args?: any): string {
        return !price ? 'R$ 0,00' : parseFloat(price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    }

}
