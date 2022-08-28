import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  //array que le pasaremos al componente de lista-platos
  datos: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  //método que toma el $EVENT recibido por el buscador (el resultado de la busqueda) y le asigna su valor a la variable datos
  pasarDatosAlListado(_event: any){
    this.datos = _event;
  }
}
