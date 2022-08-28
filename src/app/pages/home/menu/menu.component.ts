import { Component, DoCheck, OnInit } from '@angular/core';
import { ManejarMenuService } from 'src/app/services/manejar-menu.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, DoCheck {

  //en este array almacenaremos los datos del array del menú que traeremos desde el servicio
  platosDelMenu: any = [];

  //variable que contiene el precio total de todos los platos que están en el menú
  precioTotal!: number;

  //variable que contiene el precio total de todos los platos que están en el menú
  promedioTotalPreparacion!: number;

  //variable que contiene el precio total de todos los platos que están en el menú
  promedioTotalHealthScore!: number;

  //inyectamos la dependencia del MenuService
  constructor(private service: ManejarMenuService) { }

  //cuando se inicie el componente, ejecutaremos la función para obtener los platos del servicio
  ngOnInit(): void {
    this.obtenerPlatosDelMenu();
  }

  //cuando algo en el componente cambie, se ejecutarán las funciones para calcular nuevamente los datos acumulados
  ngDoCheck(): void {
    this.calcularPrecioTotal();
    this.calcularTiempoDePreparacion();
    this.calcularHealthScore();
  }

  //método para obtener el array de platos en el menú del service
  obtenerPlatosDelMenu(){
    //a nuestro array, le asignamos el valor del array del service, mandando a llamar al método getMenu del service
    this.platosDelMenu = this.service.getMenu();
  }

  //método para eliminar un plato del array del menú, toma como parámetro el $event que nos trae la CARD (el plato clickeado)
  eliminarPlatoDelMenu(_event: any){
    //a nuestro array le asignamos el valor del array filtrado, mandando a llamar al método filtrarMenu del service y pasando como parámetro el ID del $event recibido
    this.platosDelMenu = this.service.filtrarMenu(_event);
  }

  //método para obtener el precio total de los platos que estén en el menú
  calcularPrecioTotal(){
    //con el método REDUCE, lo hacemos fácilmente
    this.precioTotal = this.platosDelMenu.reduce((acc: number, plato: any) => {
      //retornamos la suma del acumulador y el precio de cada plato (pricePerServing)
      return acc + plato.pricePerServing;
    }, 0) //iniciamos el acumulador en 0
  }

  //método para obtener el precio total de los platos que estén en el menú
  calcularTiempoDePreparacion(){
    this.promedioTotalPreparacion = this.platosDelMenu.reduce((acc: number, plato: any) => {
      return acc + plato.readyInMinutes;
    }, 0)
  }

  //método para obtener el precio total de los platos que estén en el menú
  calcularHealthScore(){
    let contador = 0;
    this.promedioTotalHealthScore = this.platosDelMenu.reduce((acc: number, plato: any) => {
      contador++
      return Math.floor((acc + plato.healthScore) / contador);
    }, 0)
  }
}
