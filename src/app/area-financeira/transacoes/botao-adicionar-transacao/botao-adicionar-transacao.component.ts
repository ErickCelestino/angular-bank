import { Component, effect, signal } from '@angular/core';
import { BotaoComponent, ModalComponent } from "../../../compartilhados";

@Component({
  selector: 'app-botao-adicionar-transacao',
  imports: [BotaoComponent, ModalComponent],
  templateUrl: './botao-adicionar-transacao.component.html',
  styleUrl: './botao-adicionar-transacao.component.css'
})
export class BotaoAdicionarTransacaoComponent {
  modalAberto = signal(false);

  abrirModal() {
    this.modalAberto.set(true);
  }
}
