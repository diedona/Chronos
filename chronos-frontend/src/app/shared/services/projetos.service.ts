import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Projeto } from '../interfaces/db/projeto';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators'; 
import * as firebase from 'firebase/app';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProjetosService {

  projetosCollection: AngularFirestoreCollection<Projeto>;

  constructor(
    private db: AngularFirestore,
    private loginService: LoginService
  ) {
    this.projetosCollection = this.db.collection<Projeto>("projetos");
  }

  getAllOrderByDate(): Observable<Projeto[]> {
    return this.db.collection<Projeto>("projetos", (ref) => {
      return ref
        .where("userId", "==", this.loginService.userId)
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

  deleteProjeto(projeto: Projeto): Observable<void> {
    const refProjeto = this.db.doc<Projeto>(`projetos/${projeto.id}`);
    return from(refProjeto.delete());
  }

  criarProjeto(projetoNovo: Projeto): Observable<boolean> {

    projetoNovo.userId = this.loginService.userId;
    projetoNovo.dtCriacao = firebase.firestore.FieldValue.serverTimestamp();

    const obsCriar = from(this.projetosCollection.add(projetoNovo));
    return new Observable<boolean>((obs) => {

      obsCriar.subscribe(doc => {
        obs.next(true);
        obs.complete();
      }, err => {
        console.error("algo errado ao criar projeto: ", err);
        obs.next(false);
        obs.complete();
      });

    });
  }

  atualizarProjeto(id: string, projeto: Projeto): Observable<boolean> {
    const observableGet = from(this.projetosCollection.ref.doc(id).set(projeto));
    return new Observable<boolean>((obs) => {
      observableGet.subscribe(() => {
        obs.next(true);
        obs.complete();
      }, err => {
        console.error("algo errado ao editar projeto: ", err);
        obs.next(false);
        obs.complete();
      })
    })
  }

  getById(id: string): Observable<Projeto> {
    const obsGet = from(this.projetosCollection.ref.doc(id).get());
    return new Observable<Projeto>((obs) => {
      obsGet.subscribe(doc => {
        const data = doc.data() as Projeto;
        const id = doc.id;

        obs.next({id, ...data} as Projeto);
        obs.complete()
      }, err => {
        obs.next(null);
        obs.complete();
      })
    });
  }

}
