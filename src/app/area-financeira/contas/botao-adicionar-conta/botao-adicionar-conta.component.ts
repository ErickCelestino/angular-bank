import { Component, output, signal } from '@angular/core';
import { BotaoComponent, ModalComponent } from '../../../compartilhados';
import { Conta } from '../../compartilhados/conta.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-botao-adicionar-conta',
  imports: [BotaoComponent, ModalComponent, FormsModule],
  templateUrl: './botao-adicionar-conta.component.html',
  styleUrl: './botao-adicionar-conta.component.css',
})
export class BotaoAdicionarContaComponent {
  modalAberto = signal(false);

  novaContaForm = {
    nome: '',
    saldo: '',
  };

  contaCriada = output<Conta>();

  abrirModal() {
    this.modalAberto.set(true);
  }

  aoSubmeter() {
    const novaConta = new Conta(
      this.novaContaForm.nome,
      Number(this.novaContaForm.saldo)
    );

    this.contaCriada.emit(novaConta);
    this.modalAberto.set(false);
  }
}
