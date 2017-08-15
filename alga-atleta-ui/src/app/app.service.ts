import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { environment } from './../environments/environment';

import { Atleta } from './../app/model';

@Injectable()
export class AppService {

  atletasUrl: string;

  constructor(private http: Http) {
    this.atletasUrl = `${environment.apiUrl}/atletas`;
  }

  listar(): Promise<any> {
    return this.http.get(this.atletasUrl)
      .toPromise()
      .then(response => response.json())
  }

  buscar(id: number): Promise<any> {
    return this.http.get(`${this.atletasUrl}/${id}`)
      .toPromise()
      .then(response => response.json())
  }

  criar(atleta: Atleta): Promise<any> {
    return this.http.post(this.atletasUrl, atleta)
      .toPromise()
      .then(response => response.json())
  }

  atualizar(atleta: Atleta): Promise<any> {
    return this.http.put(`${this.atletasUrl}/${atleta.id}`, atleta)
      .toPromise()
      .then(response => response.json())
  }

  remover(atleta: Atleta): Promise<any> {
    return this.http.delete(`${this.atletasUrl}/${atleta.id}`)
      .toPromise()
      .then(() => null)
  }
}