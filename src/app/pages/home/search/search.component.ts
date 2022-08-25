import { Component, OnInit } from '@angular/core';
import { BuscarRecetaService } from 'src/app/services/buscar-receta.service';
import { AddPlatoMenuService } from 'src/app/services/add-plato-menu.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  //en este array almacenaremos los resultados de la búsqueda hecha por el usuario
  platosObtenidos: any = [];

  //inyectamos los servicios necesarios
  //apiService se encargará de las peticiones a la API
  //menuService se encargará de añadir un plato al menú (cuando el usuario lo elija)
  constructor(private apiService: BuscarRecetaService, private menuService: AddPlatoMenuService) { }

  ngOnInit(): void {
  }

  //método para hacer la búsqueda del usuario
  //como parámetro tomará el plato a buscar
  enviarYbuscarReceta(plato: string){
    //llamamos el método buscarReceta de apiService y le pasamos el plato como parámetro
    this.apiService.buscarReceta(plato).subscribe((response: any) => {
      //por últimos asignamos la respuesta de la API, como valor al array que definimos al principio
      return this.platosObtenidos = response.results;
    })
  }

  //método para agregar un plato al menú
  //tiene como parámetro el $event que nos trae el componente PLATO-CARD cuando se le hace click, este $event nos trae el plato que ha sido clickeado por el usuario
  agregarAlMenu(_event: any){
    //llamamos al método setPlatoAlMenu de nuestro menuService y le pasamos el $event recibido, esto agregará al menú el plato seleccionado por el usuario
    this.menuService.setPlatoAlMenu(_event);
  }
}
