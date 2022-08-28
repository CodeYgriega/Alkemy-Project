import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ObtenerDetallesService } from 'src/app/services/obtener-detalles.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  //variable que contendrá el parámetro que recuperamos de la URL, este mismo será el ID del plato que seleccionó el usuario
  idRecuperado!: number;

  //variable que contendrá el plato recibido al hacer la petición a la API con el ID
  platoSolicitado!: any;

  //variable que determinará cuando se mostrará el spinner
  mostrarSpinner: boolean = true;

  //variable que determinará cuando se mostrará el error (si llega a suceder) de que no se encuentre el plato en la API
  mostrarErrorEnBusqueda: boolean = false;

  //inyectamos nuestras dependencias
  //ActivatedRoute se encargará de recuperar el parámetro de la URL
  //ObtenerDetallesServices se encargará de hacer la petición a la API, pasándole el ID
  constructor(private activateRoute: ActivatedRoute, private service: ObtenerDetallesService) { }

  //cuando el componente se inicie, se ejecutarán las funciones creadas
  //recuperaremos el ID y se lo pasaremos a la función solicitarPlato, que nos traerá el plato solicitado
  ngOnInit(): void {
    this.recuperarParametro();
    this.solicitarPlato(this.idRecuperado);
  }

  //en este método seleccionamos el parámetro que queremos, queremos el ID, y se lo asignamos a la variable idRecuperado
  recuperarParametro(){
    this.activateRoute.params.subscribe(param =>{
      this.idRecuperado = param["id"];
    })
  }

  //en este método haremos un GET pasándole el ID como parámetro
  //si todo sale bien detendremos el spinner y asignaremos la respuesta de la API a la variable platoSolicitado
  //y si hay un error, detendremos el spinner y mostraremos el mensaje de error de busqueda
  solicitarPlato(id: number){
    this.service.obtenerInfo(id).subscribe(response => {
      this.mostrarSpinner = false;
      return this.platoSolicitado = response;
    },
    err =>{
      this.mostrarSpinner = false;
      this.mostrarErrorEnBusqueda = true;
    })
  }
}
