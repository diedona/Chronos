import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProjetosService } from 'src/app/shared/services/projetos.service';
import { Observable } from 'rxjs';
import { Projeto } from 'src/app/shared/interfaces/db/projeto';
import { MessagesService } from 'src/app/shared/services/messages.service';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent implements OnInit {

  projetosList: Observable<Projeto[]>;
  projetoSelecionado: Projeto;
  criarProjeto: boolean = false;
  frmProjeto: FormGroup;

  constructor(
    private projetosService: ProjetosService,
    private messageService: MessagesService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.projetosList = this.projetosService.getAllOrderByDate();
  }

  onClickProjeto(projeto: Projeto) {
    this.projetoSelecionado = projeto;
    this.criarProjeto = false;
  }

  isProjetoSelecionado(projetoLinha: Projeto): boolean {
    if (!this.projetoSelecionado) {
      return false;
    } else {
      return (this.projetoSelecionado.id === projetoLinha.id)
    }
  }

  onDeletar(projeto: Projeto): void {
    this.projetosService.deleteProjeto(projeto).subscribe(() => {
      this.projetoSelecionado = undefined;
    }, err => {
      this.messageService.error("Ocorreu um erro ao deletar");
    })
  }

  onClickCriarProjeto(): void {
    if (this.criarProjeto) {
      return;
    }

    this.projetoSelecionado = undefined;
    this.criarProjeto = true;
    this.frmProjeto = this.criarFrmProjeto();
  }

  onCancelarProjeto(): void {
    this.criarProjeto = false;
    this.frmProjeto = undefined;
  }

  onSubmit(): void {
    if (this.frmProjeto.invalid) {
      this.messageService.error("Cheque o formulário!");
      return;
    }

    const projetoNovo = this.frmProjeto.value as Projeto;
    this.projetosService.criarProjeto(projetoNovo).subscribe((ok) => {
      if (ok) {
        // limpa interface
        this.onCancelarProjeto();
      } else {
        this.messageService.error("Ocorreu um erro ao salvar o projeto!")
      }
    }, err => {
      console.error("erro desconhecido:", err);
      this.messageService.error("Ocorreu um erro desconhecido!")
    })
  }

  private criarFrmProjeto(): FormGroup {
    return this.fb.group({
      titulo: ['', [Validators.required]],
      descricao: ['', [Validators.required]]
    });
  }

}
