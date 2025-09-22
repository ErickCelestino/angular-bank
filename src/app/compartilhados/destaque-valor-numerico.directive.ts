import { afterRender, Directive, ElementRef, input } from '@angular/core';

@Directive({
  selector: '[appDestaqueValorNumerico]',
})
export class DestaqueValorNumericoDirective {
  appDestaqueValorNumerico = input.required<number>();

  constructor(elemento: ElementRef<HTMLElement>) {
    afterRender(() => {
      if (this.appDestaqueValorNumerico() > 0) {
        elemento.nativeElement.style.color = 'var(--destaque-receita)';
      } else if (this.appDestaqueValorNumerico() < 0) {
        elemento.nativeElement.style.color = 'var(--destaque-despesa)';
      }
    });
  }
}
