import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Klub } from "./klub";
import { catchError, map, tap } from 'rxjs/operators';
import { KLUBY } from "./mock-kluby";
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class KlubService {

  private klubyUrl = 'api/kluby';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(  private http: HttpClient,
     private messageService: MessageService)  { }

 
     
     getKluby(): Observable<Klub[]> {
      return this.http.get<Klub[]>(this.klubyUrl)
        .pipe(
          tap(_ => this.log('fetched clubs')),
          catchError(this.handleError<Klub[]>('getKluby', []))
        );
    }
  
  

    getKlub(id: number): Observable<Klub> {
      const url = `${this.klubyUrl}/${id}`;
      return this.http.get<Klub>(url).pipe(
        tap(_ => this.log(`fetched klub id=${id}`)),
        catchError(this.handleError<Klub>(`getKlub id=${id}`))
      );
  }

  addKlub(klub: Klub): Observable<Klub> {
    return this.http.post<Klub>(this.klubyUrl, klub, this.httpOptions).pipe(
      tap((newKlub: Klub) => this.log(`added club w/ id=${newKlub.id}`)),
      catchError(this.handleError<Klub>('addKlub'))
    );
  }
  private log(message: string) {
    this.messageService.add(`Service: ${message}`);
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  

      console.error(error); 
  
     
      this.log(`${operation} failed: ${error.message}`);
  
  
      return of(result as T);
    };
  }

}




