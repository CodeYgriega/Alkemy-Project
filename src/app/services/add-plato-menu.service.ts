import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddPlatoMenuService {

  //este será el array del menú, donde se almacenarán los platos elegidos por el usuario
  menu: any = [];

  constructor() { }

  //método para agregar un plato al array del menú
  setPlatoAlMenu(plato: any){
    this.menu.push(plato);
  }

  //método para retornar el array del menú
  //este método se deberá llamar desde el componente donde vamos a mostrar el array del menú
  getMenu(){
    return this.menu;
  }

  //método para eliminar un plato del menú, hacemos un filter que nos devolverá un nuevo array pero sin el plato que eliminó el usuario y almacenamos el resultado en el array del menú
  //aquí tomamos solamente el ID del plato seleccionado, para no traer tantos datos en vano y así hacemos la comparación más simple
  filtrarMenu(id: number){
    this.menu = this.menu.filter((plato: any) => {
      //retornamos todos los ID de los platos que sean diferentes al ID del plato que seleccionó el usuario
      return plato.id !== id;
    })
    //y por último retornamos el array del menú, que ya está actualizado
    return this.menu;
  }
}
