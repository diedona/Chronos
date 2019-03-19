import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Projeto } from '../interfaces/db/projeto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetosService {

  projetos: AngularFirestoreCollection<Projeto>;

  constructor(
    private db: AngularFirestore
  ) {
    this.projetos = this.db.collection<Projeto>("projetos");
  }

  getAll(): Observable<Projeto[]> {
    return this.projetos.valueChanges();
  }

  getAllOrderByDate():Observable<Projeto[]> {
    return this.db.collection<Projeto>("projetos", (ref) => {
      return ref.orderBy("dtCriacao", "desc")
    }).valueChanges();
  }
}
