import { Component, OnInit } from '@angular/core';
import { CadastrarModel } from './cadastro.model';
import { CadastrarService } from '../cadastrar.service';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {
  //Variáveis utilizadas pelo modal
  display = 'none'
  class = 'btn-danger'

  title = "ATENÇÃO"
  body = ""
  imagePathSalvar = '/assets/salvar.png'

  //Variáveis para o cadastro
  componente: CadastrarModel = new CadastrarModel();
  componentes: Array<any> = new Array();

  //Variaveis para o input mask
  cep=[/\d/,/\d/,'.',/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/]
  phone= ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  celPhone= ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

  constructor(private cadastrarService: CadastrarService) { }
  ngOnInit() {
    
  }

  //Verifica os requisitos das informações inseridas antes de cadastrar
  verifica() {
    this.title = "ATENÇÃO"
    this.class = "btn-danger"
    const name = this.componente.name

    const ano = String(this.componente.dataNasc).split('-');

    const regexName = /[0-9]+/gmi;
    const regexDataNasc = /([0-9]{4})+[-]+([0-9]{2})+[-]+([0-9]{2})/gmi;
    const regexEmail = /[A-Za-z0-9._]+@[a-z]+\.[a-z]+/igm;
    const regexPhone = /\(+[0-9]{2}\)+\ +[0-9]{4}\-+[0-9]{4}/gmi
    const regexCelPhone = /\(+[0-9]{2}\)+\ +[0-9]{5}\-+[0-9]{4}/gmi

    console.log(this.componente.celPhone)
    if (this.componente.name == undefined || regexName.exec(this.componente.name) != null || this.componente.name == "") {
      this.body = "Nome inválido, tente novamente"
      this.openModal()

    } else if (regexDataNasc.exec(String(this.componente.dataNasc)) == null || String(this.componente.dataNasc) == undefined) {
      this.body = "Selecione uma data de nascimento válida"
      this.openModal()

    } else if (Number(ano[0]) > 2019) {
      this.body = "Ano inválido, tente novamente"
      this.openModal()

    } else if (this.componente.sexo == undefined) {
      this.body = "Selecione o sexo do(a) " + name
      this.openModal()

    } else if (this.componente.instrumento == undefined || this.componente.instrumento == "") {
      this.body = "Selecione o instrumento tocado pelo(a) " + name
      this.openModal()

    } else if (this.componente.address == undefined || this.componente.address == "") {
      this.body = "Insira um endreço para " + name
      this.openModal()

    } else if (this.componente.city == undefined || this.componente.city == "") {
      this.body = "Insira uma cidade para " + name
      this.openModal()

    } else if (this.componente.state == undefined) {
      this.body = "Insira um estado para " + name
      this.openModal()

    } else if (regexEmail.exec(this.componente.email) == null || this.componente.email == undefined || this.componente.email == "") {
      this.body = "Insira um e-mail válido para " + name
      this.openModal()

    } else if (regexPhone.exec(this.componente.phone) == null || this.componente.phone == undefined || this.componente.phone == "") {
      this.body = "Insira um telefone válido para " + name
      this.openModal()

    } else if (regexCelPhone.exec(this.componente.celPhone) == null || this.componente.celPhone == undefined || this.componente.celPhone == "") {
      this.body = "Insira um celular válido para " + name
      this.openModal()

    } else {
      this.cadastrarComponente()
    }
  }

  //Cadastra os dados inseridos em um arquivo json
  cadastrarComponente() {
      console.log(this.componente)
      this.cadastrarService.cadastrarComponente(this.componente).subscribe(componente => {
      this.componente = new CadastrarModel();
    }, err => {
      console.log('Erro ao enviar dados ', err)
    });

      //Mostra que o procedimento foi realizado com sucesso
      this.title = "SUCESSO"
      this.body = "Cadastro realizado com sucesso"
      this.class = "btn-success"
      this.openModal()
  }

  //Funções para abrir e fechar o modal
  openModal() {
    this.display = "block"
  }
  closeModal() {
    this.display = "none"
  }

}
