import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  getMenuOpt() {
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }
  gethero() {
    return this.http.get<Componente[]>('/assets/data/superheroes.json').pipe(delay(2000));
  }
  getAlbumes() {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/albums');
  }
  get() {
    return this.http.get<any>('http://localhost:50908/api/usuario');
  }
}
