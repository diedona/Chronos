import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private subject = new BehaviorSubject<boolean>(false);
  loadingState = this.subject.asObservable();

  constructor() { }

  show() {
    this.subject.next(true);
  }

  hide() {
    this.subject.next(false);
  }
}
