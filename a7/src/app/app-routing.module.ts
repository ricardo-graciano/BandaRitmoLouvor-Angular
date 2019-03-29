import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ListarComponent } from './listar/listar.component';
import { FichaUnicaComponent } from './ficha-unica/ficha-unica.component';
import { HomeComponent } from './home/home.component';
import { InfoGraficosComponent } from './info-graficos/info-graficos.component';

//Definição das rotas
const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'cadastrar', component: CadastrarComponent},
  {path:'listar', component: ListarComponent},
  {path:'ficha-unica/:id', component: FichaUnicaComponent},
  {path:'info-graficos', component: InfoGraficosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
