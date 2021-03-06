import { LoaderService } from './../../shared/services/loader.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef, ContentChild } from '@angular/core';
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

  private divDetail: ElementRef;
  @ViewChild('divDetail') set content(content: ElementRef) {
    this.divDetail = content;
  }

  constructor(
    private projetosService: ProjetosService,
    private messageService: MessagesService,
    private fb: FormBuilder,
    private loaderService: LoaderService
  ) { }

  ngOnInit() {
    this.loaderService.show();
    this.projetosList = this.projetosService.getAllOrderByDate();
    this.projetosList.subscribe(() => { this.loaderService.hide() });
  }

  onClickProjeto(projeto: Projeto) {
    this.projetoSelecionado = projeto;
    this.criarProjeto = false;

    // VIEW CHILD TAKES A CYCLE TO BE DEFINED (because of *ngIf)
    // WORKAROUND...
    setTimeout(() => {
      (this.divDetail.nativeElement as HTMLElement).scrollIntoView({ behavior: "smooth", block: "end" });
    }, 0);
  }

  isProjetoSelecionado(projetoLinha: Projeto): boolean {
    if (!this.projetoSelecionado) {
      return false;
    } else {
      return (this.projetoSelecionado.id === projetoLinha.id)
    }
  }

  onDeletar(projeto: Projeto): void {

    this.loaderService.show();
    this.projetosService.deleteProjeto(projeto).subscribe(() => {
      this.projetoSelecionado = undefined;
      this.loaderService.hide();
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

  onUpdate(projeto: Projeto): void {
    this.projetoSelecionado = projeto;
    this.criarProjeto = true;
    this.frmProjeto = this.criarFrmProjeto();
    this.frmProjeto.patchValue(projeto);
  }

  onSubmit(): void {
    if (this.frmProjeto.invalid) {
      this.messageService.error("Cheque o formulário!");
      return;
    }

    let observable;
    const projetoNovo = this.frmProjeto.value as Projeto;

    if (this.projetoSelecionado) {
      projetoNovo.dtCriacao = this.projetoSelecionado.dtCriacao;
      projetoNovo.userId = this.projetoSelecionado.userId;
      observable = this.projetosService.atualizarProjeto(this.projetoSelecionado.id, projetoNovo);
    } else {
      observable = this.projetosService.criarProjeto(projetoNovo);
    }

    this.loaderService.show();
    observable.subscribe((ok) => {
      if (ok) {

        this.loaderService.hide();
        // limpa interface
        this.onCancelarProjeto();

        if (this.projetoSelecionado) {
          this.atualizarProjetoSelecionado();
        }

      } else {
        this.loaderService.hide();
        this.messageService.error("Ocorreu um erro ao salvar o projeto!")
      }
    }, err => {
      console.error("erro desconhecido:", err);
      this.messageService.error("Ocorreu um erro desconhecido!")
    })
  }

  private atualizarProjetoSelecionado() {
    this.loaderService.show();
    this.projetosService.getById(this.projetoSelecionado.id).subscribe(prj => {
      this.loaderService.hide();
      this.projetoSelecionado = prj;
    }, err => {
      this.loaderService.hide();
      this.projetoSelecionado = undefined;
    })
  }

  private criarFrmProjeto(): FormGroup {
    return this.fb.group({
      titulo: ['', [Validators.required, Validators.maxLength(50)]],
      descricao: ['', [Validators.required, Validators.maxLength(500)]]
    });
  }

}
