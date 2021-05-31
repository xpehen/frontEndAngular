import { Component, OnInit } from '@angular/core';
import { ContatosService } from '../service/contatos/contatos.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {

  contatos: Array<any> = [];
  error: any;

  constructor(private contatosService: ContatosService) {
    this.listarContatos();
  }

  ngOnInit(): void {
  }

  listarContatos(){
    this.contatosService.listarContatos().subscribe(
      c => {
        this.contatos = c.content;
    }, error => {
        this.error = error;
    });

    console.log(this.contatos);
  }

}
