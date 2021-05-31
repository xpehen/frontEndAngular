import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class  ContatosService {

  contatosUrl = 'http://localhost:9000/contatos';

  constructor(private http: HttpClient) { }

  public listarContatos(): Observable<any>{
    return this.http.get(`${this.contatosUrl}`+'?page=0&pageSize=10');
  }
}