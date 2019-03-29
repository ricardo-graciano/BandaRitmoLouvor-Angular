import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CadastrarModel } from './cadastrar/cadastro.model';
import { Observable } from 'rxjs';
import { ListarModel } from './ficha-unica/ficha-unica.model';

@Injectable({
  providedIn: 'root'
})
export class CadastrarService {

  constructor(private http: HttpClient) { }

  //Funções do CRUD

  listarComponentes() : Observable<any>{
    return this.http.get("http://localhost:3000/cadastros/")
  }

  cadastrarComponente(componente: CadastrarModel): Observable<any>{
    return this.http.post("http://localhost:3000/cadastros/", componente)
  }

  autualizarCadastro(id: any, componente: ListarModel) : Observable<any>{
    return this.http.put("http://localhost:3000/cadastros/".concat(id), componente)
  }

  deleteCadastro(id: any) : Observable<any>{
    return this.http.delete("http://localhost:3000/cadastros/".concat(id))
  }
}
