import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { TextMaskModule } from 'angular2-text-mask';
import { ChartsModule } from 'ng2-charts';

import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';


import { CadastrarService } from './cadastrar.service';
import { ListarComponent } from './listar/listar.component';
import { FichaUnicaComponent } from './ficha-unica/ficha-unica.component';
import { HomeComponent } from './home/home.component';
import { InfoGraficosComponent } from './info-graficos/info-graficos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CadastrarComponent,
    ListarComponent,
    FichaUnicaComponent,
    HomeComponent,
    InfoGraficosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TextMaskModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [
    CadastrarService,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
