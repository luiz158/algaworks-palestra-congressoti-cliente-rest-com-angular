import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import 'rxjs/add/operator/toPromise';

import { Atleta } from '../app/model';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  atleta = new Atleta();

  atletas = [];

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.appService.listar().then(dados => {
      this.atletas = dados;
    });
  }

  editar(atleta: Atleta) {
    this.appService.buscar(atleta.id)
      .then(a => this.atleta = a);
  }

  salvar(frm: FormControl) {
    let promise: Promise<any> = null;

    if(this.atleta.id == null) {
      promise = this.appService.criar(this.atleta);
    } else {
      promise = this.appService.atualizar(this.atleta);
    }

    promise.then(() => {
      this.atleta = new Atleta();
      frm.reset();
      this.listar();
    });
  }

  remover(atleta: Atleta) {
    this.appService.remover(atleta).then(() => {
      this.listar();
    });
  }

  cancelar(frm: FormControl) {
    this.atleta = new Atleta();
    frm.reset();
  }
}