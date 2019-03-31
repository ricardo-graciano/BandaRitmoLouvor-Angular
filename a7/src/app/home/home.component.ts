import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  //Caminho da imagem na home
  image = '/assets/music_template.jpg'

  constructor() { }

  ngOnInit() {
  }

}
