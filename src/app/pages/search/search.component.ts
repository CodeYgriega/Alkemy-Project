import { Component, OnInit } from '@angular/core';
import { ManejarMenuService } from 'src/app/services/manejar-menu.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  //array que le pasaremos al componente de lista-platos
  datos: any = [];

  constructor(private menuService: ManejarMenuService) { }

  ngOnInit(): void {
  }

  //método que toma el $EVENT recibido por el buscador (el resultado de la busqueda) y le asigna su valor a la variable datos
  pasarDatosAlListado(_event: any){
    this.datos = _event;
  }

  //método para agregar un plato al menú
  //tiene como parámetro el $event que nos trae el componente PLATO-CARD cuando se le hace click, este $event nos trae el plato que ha sido clickeado por el usuario
  agregarAlMenu(_event: any){
    //llamamos al método setPlatoAlMenu de nuestro menuService y le pasamos el $event recibido, esto agregará al menú el plato seleccionado por el usuario
      this.menuService.setPlatoAlMenu(_event);
  }
}
