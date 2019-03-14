import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  error(msg: string): void {
    alert(msg);
  }

}
