import { Injectable } from '@angular/core';
import { Klub } from "./klub";
import { KLUBY } from "./mock-kluby";
@Injectable({
  providedIn: 'root'
})
export class KlubService {

  constructor() { }


  getKluby(): Klub[] {
    return KLUBY;
  }
}
