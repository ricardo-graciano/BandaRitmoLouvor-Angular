import { Component, OnInit } from '@angular/core';
import { CadastrarService } from '../cadastrar.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  componentes: Array<any> = new Array();
  celPhone= ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

  constructor(private listarCadastros: CadastrarService ) { }

  ngOnInit() {
    this.listarComponentes();
  }

  listarComponentes(){
    this.listarCadastros.listarComponentes().subscribe(componentes =>{
      this.componentes = componentes
    }, err =>{
      console.log('Erro ao listar componentes ', err)
    })
  }
}
