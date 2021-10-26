import { Injectable } from '@angular/core';
import { Klub } from "./klub";
import { KLUBY } from "./mock-kluby";
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class KlubService {

  constructor() { }


  getKluby(): Observable<Klub[]> {
    const kluby = of(KLUBY);
    return kluby;
  }
}
