import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Projeto } from '../interfaces/db/projeto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjetosService {

  projetosCollection: AngularFirestoreCollection<Projeto>;

  constructor(
    private db: AngularFirestore
  ) {
    this.projetosCollection = this.db.collection<Projeto>("projetos");
  }

  getAll(): Observable<Projeto[]> {
    return this.projetosCollection
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Projeto;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        })
      );
  }

  getAllOrderByDate(): Observable<Projeto[]> {
    return this.db.collection<Projeto>("projetos", (ref) => {
      return ref
        .orderBy("dtCriacao", "desc");
    })
    .snapshotChanges()
    .pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Projeto;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      })
    );
  }


}
