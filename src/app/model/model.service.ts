import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListaZadan } from './todoList';
import { Observable } from 'rxjs';

@Injectable()
export class ModelService {

  readonly URL = 'http://localhost:3000/listy/';

  constructor(private http: HttpClient) { }

  pobierzListe(idListy: number): Observable<ListaZadan> {
    return this.http.get<ListaZadan>(this.URL + idListy);
  }

  zapiszListe(idListy: number, zadania: ListaZadan): Observable<void> {
    return this.http.put<void>(this.URL + idListy, zadania);
  }

}
