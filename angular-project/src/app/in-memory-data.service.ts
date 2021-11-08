import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Klub } from './klub';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const kluby = [
      { id: 11, name: 'Barcelona' },
      { id: 12, name: 'Atletico Madryt' },
      { id: 13, name: 'Liverpool' },
      { id: 14, name: 'Manchester City' },
      { id: 15, name: 'Manchester United' },
      { id: 16, name: 'Arsenal' },
      { id: 17, name: 'Tottenham' },
      { id: 18, name: 'Juventus' },
      { id: 19, name: 'Napoli' },
      { id: 20, name: 'Inter' },
      { id: 21, name: 'AC Milan' },
      { id: 22, name: 'Lazio' },
      { id: 23, name: 'Roma' },
      { id: 24, name: 'Atalanta' },
      { id: 25, name: 'PSG' },
      { id: 26, name: 'Monaco' },
      { id: 27, name: 'Borussia Dortmund' },
      { id: 28, name: 'Bayern Monachium' }
    ];
    return {kluby};
  }

  genId(kluby: Klub[]): number {
    return kluby.length > 0 ? Math.max(...kluby.map(klub => klub.id)) + 1 : 11;
  }
}