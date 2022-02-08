import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brazilianReals',
})
export class BrazilianRealsPipe implements PipeTransform {
  transform(value: number): string {
    const formatted = value.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });

    const formattedWithOutRealSign = formatted.replace('R$', '');
    return formattedWithOutRealSign;
  }
}
