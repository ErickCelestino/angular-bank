import { Component, effect, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BotaoComponent, ModalComponent } from '../../../compartilhados';
import { TipoTransacao, Transacao } from '../../compartilhados/transacao.model';
import { Conta } from '../../compartilhados/conta.model';

@Component({
  selector: 'app-botao-adicionar-transacao',
  imports: [BotaoComponent, ModalComponent, FormsModule],
  templateUrl: './botao-adicionar-transacao.component.html',
  styleUrl: './botao-adicionar-transacao.component.css',
})
export class BotaoAdicionarTransacaoComponent {
  protected tipoTransacao = TipoTransacao;
  modalAberto = signal(false);

  novaTransacaoForm = {
    nome: '',
    tipo: '',
    valor: '',
    data: '',
    conta: '',
  };

  contas = input.required<Conta[]>();

  transacaoCriada = output<Transacao>();

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
    );

    this.transacaoCriada.emit(novaTransacao);
    Object.keys(this.novaTransacaoForm).forEach(
      (key) =>
        (this.novaTransacaoForm[key as keyof typeof this.novaTransacaoForm] =
          '')
    );
    this.modalAberto.set(false);
  }
}
