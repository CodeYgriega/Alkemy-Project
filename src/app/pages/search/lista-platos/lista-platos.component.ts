import { Component, Input, OnInit } from '@angular/core';
import { ManejarMenuService } from 'src/app/services/manejar-menu.service';

@Component({
  selector: 'app-lista-platos',
  templateUrl: './lista-platos.component.html',
  styleUrls: ['./lista-platos.component.scss']
})
export class ListaPlatosComponent implements OnInit {

  @Input() platosParaMostrar = [];

  constructor(private menuService: ManejarMenuService) { }

  ngOnInit(): void {
  }

  //método para agregar un plato al menú
  //tiene como parámetro el $event que nos trae el componente PLATO-CARD cuando se le hace click, este $event nos trae el plato que ha sido clickeado por el usuario
  agregarAlMenu(_event: any){
    //llamamos al método setPlatoAlMenu de nuestro menuService y le pasamos el $event recibido, esto agregará al menú el plato seleccionado por el usuario
      this.menuService.setPlatoAlMenu(_event);
  }

}
