import { Directive } from "@angular/core";

@Directive({
  selector: '[appDestaqueValorNumerico]'
})
export class DestaqueValorNumericoDirective {
  constructor(){
    console.log('Diretiva aplicada!')
  }
}
