import { Component, viewChild } from '@angular/core';
import { BotaoComponent } from "../../../compartilhados/botao/botao.component";

@Component({
  selector: 'app-botao-adicionar-transacao',
  imports: [BotaoComponent],
  templateUrl: './botao-adicionar-transacao.component.html',
  styleUrl: './botao-adicionar-transacao.component.css'
})
export class BotaoAdicionarTransacaoComponent {
  modal = viewChild('modal')

  abrirModal() {
    console.log(this.modal())
  }
}
