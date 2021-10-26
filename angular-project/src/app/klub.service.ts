import { Injectable } from '@angular/core';
import { Klub } from "./klub";
import { KLUBY } from "./mock-kluby";
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class KlubService {

  constructor(private messageService: MessageService) { }


  getKluby(): Observable<Klub[]> {
    const kluby = of(KLUBY);
    this.messageService.add("Klub service: change");
    return kluby;
  }
}
