import { Component, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BotaoComponent, ModalComponent } from "../../../compartilhados";
import { TipoTransacao, Transacao } from '../../compartilhados/transacao.model';

@Component({
  selector: 'app-botao-adicionar-transacao',
  imports: [BotaoComponent, ModalComponent, FormsModule],
  templateUrl: './botao-adicionar-transacao.component.html',
  styleUrl: './botao-adicionar-transacao.component.css'
})
export class BotaoAdicionarTransacaoComponent {
  protected tipoTransacao = TipoTransacao
  modalAberto = signal(false);

  novaTransacaoForm = {
    nome: '',
    tipo: '',
    valor: '',
    data: '',
    conta: '',
  }

  abrirModal() {
    this.modalAberto.set(true);
  }

  aoSubmeter() {
    const novaTransacao = new Transacao(
      this.novaTransacaoForm.nome,
      this.novaTransacaoForm.tipo as TipoTransacao,
      Number(this.novaTransacaoForm.valor),
      this.novaTransacaoForm.data,
      this.novaTransacaoForm.conta
    )

    console.log(novaTransacao)
  }
}
