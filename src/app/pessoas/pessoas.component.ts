import { Component, OnInit } from '@angular/core';
import { PessoasService } from '../service/pessoas/pessoas.service';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  pessoas: Array<any> = [];
  error: any;

  constructor(private pessoasService: PessoasService) {
    this.listarPessoas();
  }

  ngOnInit(): void {
  }

  listarPessoas(){
    this.pessoasService.listarPessoas().subscribe(
      p => {
        this.pessoas = p.content;
    }, error => {
        this.error = error;
    });
  }
}
