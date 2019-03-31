import { Component, OnInit } from '@angular/core';
import { CadastrarService } from '../cadastrar.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  componentes: Array<any> = new Array();

  constructor(private listarCadastros: CadastrarService ) { }

  ngOnInit() {
    this.listarComponentes();
  }

  //Exibe todos os cadastros que existem no arquivo JSON
  listarComponentes(){
    this.listarCadastros.listarComponentes().subscribe(componentes =>{
      this.componentes = componentes
    }, err =>{
      alert('Erro ao listar componentes '+ err)
    })
  }
}
