import { Injectable } from '@angular/core';
import { Klub } from "./klub";
import { KLUBY } from "./mock-kluby";
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class KlubService {

  getKlub(id: number): Observable<Klub>{
    const klub = KLUBY.find(h => h.id == id)!;
    this.messageService.add(`ClubService: fetched club id=${id}`)
    return of(klub);
  }

  constructor(private messageService: MessageService) { }


  getKluby(): Observable<Klub[]> {
    const kluby = of(KLUBY);
    this.messageService.add("Klub service: change");
    return kluby;
  }
}
