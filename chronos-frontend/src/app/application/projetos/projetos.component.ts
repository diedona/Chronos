import { Component, OnInit } from '@angular/core';
import { ProjetosService } from 'src/app/shared/services/projetos.service';
import { Observable } from 'rxjs';
import { Projeto } from 'src/app/shared/interfaces/db/projeto';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent implements OnInit {

  projetosList: Observable<Projeto[]>;
  projetoSelecionado: Projeto;

  constructor(
    private projetosService: ProjetosService
  ) { }

  ngOnInit() {
    this.projetosList = this.projetosService.getAllOrderByDate();
  }

  onClickProjeto(projeto: Projeto) {
    this.projetoSelecionado = projeto;
  }

  isProjetoSelecionado(projetoLinha: Projeto): boolean {
    if(!this.projetoSelecionado) {
      return false;
    } else {
      return (this.projetoSelecionado.id === projetoLinha.id)
    }
  }

}
