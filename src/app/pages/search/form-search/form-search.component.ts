import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BuscarRecetaService } from 'src/app/services/buscar-receta.service';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent implements OnInit {

  @Output() respuestaApi: EventEmitter<any> = new EventEmitter();

  //variable booleana que determinará cuando se mostrará el spinner
  mostrarSpinner: boolean = false;

  //variable booleana que determinará cuando se mostrará el mensaje si no hay resultados para la búsqueda
  mensajeNoHayResultados: boolean = false;

  //variable booleana que determinará cuando se mostrará el mensaje de pocos carácteres
  mensajePocosCaracteres: boolean = false;

  //inyectamos los servicios necesarios
  //apiService se encargará de las peticiones a la API
  //menuService se encargará de añadir un plato al menú (cuando el usuario lo elija)
  constructor(private apiService: BuscarRecetaService) { }

  ngOnInit(): void {
  }

  //método para hacer la búsqueda del usuario
  //como parámetro tomará el plato a buscar
  enviarYbuscarReceta(plato: string){
    if(plato.length <= 2){
      this.mensajeNoHayResultados = false;
      this.mensajePocosCaracteres = true;
    }
    else{
      this.mensajePocosCaracteres = false;
      this.mensajeNoHayResultados = false;
      this.mostrarSpinner = true;
      //llamamos el método buscarReceta de apiService y le pasamos el plato como parámetro
      this.apiService.buscarReceta(plato).subscribe((response: any) => {
        this.mostrarSpinner = false;
        this.mensajeNoHayResultados = false;
        if(response.results.length === 0){
          this.mensajeNoHayResultados = true;
        }
        //por últimos asignamos la respuesta de la API, como valor al array que definimos al principio
        return this.respuestaApi.emit(response.results);
      })
    }
  }
}
