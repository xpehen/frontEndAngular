import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { PessoasService } from './service/pessoas/pessoas.service';
import { ContatosComponent } from './contatos/contatos.component';


@NgModule({
  declarations: [
    AppComponent,
    PessoasComponent,
    ContatosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PessoasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
