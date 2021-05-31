import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  pessoasUrl = 'http://localhost:9000/pessoas';

  constructor(private http: HttpClient) { }

  public listarPessoas(): Observable<any>{
    return this.http.get(`${this.pessoasUrl}`+'?page=0&pageSize=10');
  }
}
