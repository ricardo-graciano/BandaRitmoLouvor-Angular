import { Component, OnInit } from '@angular/core';
import { CadastrarService } from '../cadastrar.service';
import { ListarModel } from './ficha-unica.model';

@Component({
  selector: 'app-ficha-unica',
  templateUrl: './ficha-unica.component.html',
  styleUrls: ['./ficha-unica.component.scss']
})
export class FichaUnicaComponent implements OnInit {
  //Define variáveis a ser utilizadas pelo código
  //variaveis do "X"
  /*continuar fechando o modal*/ opcoes = "none"
  /*voltar para listagem*/       listagem = "none"

  //variavel excluir
  exclui = "none"
  //variavel alterar
  altera = "none"
  //variavel para mostrar sucesso
  sucesso = "none"

  //inicializa o modal fechado
  display = "none"
  volta = ""

  title = "ATENÇÃO"
  body = ""

  componentes: Array<any> = new Array();
  componente: ListarModel = new ListarModel();

  id: Array<any> = new Array();

  imagePathEditar = '/assets/editar.png'
  imagePathExcluir = '/assets/excluir.png'

  //Variaveis para o input mask
  cep = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]
  phone = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  celPhone = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

  constructor(private listarCadastros: CadastrarService) { }

  ngOnInit() {
    //captura o id do componente
    var url = window.location.href;
    this.id = url.split(':')
    this.id = this.id[this.id.length - 1].split('=')
    this.id[0] = Number(this.id[0]);
    this.listarComponentes()
  }


  //Preenche os campos com os dados do componente
  listarComponentes() {
    this.listarCadastros.listarComponentes().subscribe(componentes => {
      this.componentes = componentes

      for (var i = 0; i < componentes.length; i++) {
        if (componentes[i].id == this.id[0]) {
          this.componente = componentes[i];
          break
        }
      }
    }, err => {
      alert('Erro ao listar alunos ' + err)
    })
  }

  //Modal para verificação se deseja prosseguir com a exclusao dos dados do componente
  verificaDelete() {
    this.opcoes = ""
    this.listagem = "none"
    this.exclui = ""
    this.altera = "none"
    this.sucesso = "none"
    this.volta = "none"

    this.title = "ATENÇÃO"
    this.body = "Este cadastro está prestes a ser excluido. Continuar?"
    this.openModal()
  }

  //Modal para verificação dos campos se estão de acordo com o exigido e Exibição 
  //do modal para confirmação de alteração
  verifica() {
    this.opcoes = ""
    this.volta = ""
    const name = this.componente.name

    const ano = String(this.componente.dataNasc).split('-');

    //Expressões regulares para validação de dados
    const regexName = /[0-9]+/gmi;
    const regexDataNasc = /([0-9]{4})+[-]+([0-9]{2})+[-]+([0-9]{2})/gmi;
    const regexEmail = /[A-Za-z0-9._]+@[a-z]+\.[a-z]+/igm;
    const regexPhone = /\(+[0-9]{2}\)+\ +[0-9]{4}\-+[0-9]{4}/gmi
    const regexCelPhone = /\(+[0-9]{2}\)+\ +[0-9]{5}\-+[0-9]{4}/gmi

    
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
      this.opcoes = ""
      this.listagem = "none"
      this.exclui = "none"
      this.altera = ""
      this.sucesso = "none"
      this.volta = "none"

      this.title = "ATENÇÃO"
      this.body = "Este cadastro está prestes a ser atualizado. Continuar?"
      this.openModal()

    }
  }

  //Atualiza cadastro e imprime na tela que foi realizado com sucesso
  atualizarCadastro() {
    this.closeModal()
    this.listarCadastros.autualizarCadastro(Number(this.id[0]), this.componente).subscribe(componentes => {
      componentes = this.componentes

      this.opcoes = "none"
      this.listagem = ""
      this.exclui = "none"
      this.altera = "none"
      this.sucesso = ""

      this.title = "SUCESSO"
      this.body = "Este cadastro foi ALTERADO com sucesso"
      this.openModal()
    }, err => {
      alert("Não foi possivel atualizar " + err)
    })
  }

  //Deleta cadastro e imprime na tela que foi realizado com sucesso
  deleteCadastro() {
    this.listarCadastros.deleteCadastro(this.id[0]).subscribe(componentes => {
      this.opcoes = "none"
      this.listagem = ""
      this.exclui = "none"
      this.altera = "none"
      this.sucesso = ""

      this.title = "SUCESSO"
      this.body = "Este cadastro foi EXCLUIDO com sucesso"
      this.openModal()
    }, err => {
      alert("Não foi possivel deletar o cadastro" + err)
    })
  }

  //Funcoes para abrir e fechar o modal
  openModal() {
    this.display = "block"
  }
  closeModal() {
    this.display = "none"
  }
}
