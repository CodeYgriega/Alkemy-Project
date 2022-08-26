import { Component, OnInit } from '@angular/core';
import { BuscarRecetaService } from 'src/app/services/buscar-receta.service';
import { ManejarMenuService } from 'src/app/services/manejar-menu.service';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent implements OnInit {

  //en este array almacenaremos los resultados de la búsqueda hecha por el usuario
  platosObtenidos: any = [];

  //variable booleana que determinará cuando se mostrará el spinner
  mostrarSpinner: boolean = false;

  //inyectamos los servicios necesarios
  //apiService se encargará de las peticiones a la API
  //menuService se encargará de añadir un plato al menú (cuando el usuario lo elija)
  constructor(private apiService: BuscarRecetaService, private menuService: ManejarMenuService) { }

  ngOnInit(): void {
  }

  //método para hacer la búsqueda del usuario
  //como parámetro tomará el plato a buscar
  enviarYbuscarReceta(plato: string){
    this.mostrarSpinner = true;
    //llamamos el método buscarReceta de apiService y le pasamos el plato como parámetro
    this.apiService.buscarReceta(plato).subscribe((response: any) => {
      this.mostrarSpinner = false;
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
