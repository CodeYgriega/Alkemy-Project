import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManejarMenuService {

  //este será el array del menú, donde se almacenarán los platos elegidos por el usuario
  menu: any = [];

  constructor() { }

  //método para agregar un plato al array del menú
  setPlatoAlMenu(plato: any){
    let platosVeganos = 0;
    let platosNoVeganos = 0;

    if(this.menu.length !== 0){
      this.menu.forEach((item: any) =>{
        if(item.vegan){
          platosVeganos++;
          console.log(platosVeganos + " platos veganos")
        }
        else if(!item.vegan){
          platosNoVeganos++;
          console.log(platosNoVeganos + " platos no veganos")
        }
      })

      if(plato.vegan){
        if(platosVeganos < 2){
          console.log(platosVeganos + " son los platos veganos, asi que agregaremos el que solicitaste");
          this.menu.push(plato);
        }
        else{
          alert("Ya hay 2 platos veganos en el menú!");
        }
      }
      else if(!plato.vegan){
        if(platosNoVeganos < 2){
          console.log(platosNoVeganos + " son los platos NO veganos, asi que agregaremos el que solicitaste");
          this.menu.push(plato);
        }
        else{
          alert("Ya hay 2 platos NO veganos en el menú");
        }
      }
    }
    else{
      this.menu.push(plato);
    }

    return console.log(this.menu + " menu total");
  }

  //método para retornar el array del menú
  //este método se deberá llamar desde el componente donde vamos a mostrar el array del menú
  getMenu(){
    return this.menu;
  }

  //método para eliminar un plato del menú, hacemos un filter que nos devolverá un nuevo array pero sin el plato que eliminó el usuario y almacenamos el resultado en el array del menú
  //aquí tomamos solamente el ID del plato seleccionado, para no traer tantos datos en vano y así hacemos la comparación más simple
  filtrarMenu(platoAeliminar: any){
    let platosVeganos = 0;
    let platosNoVeganos = 0;
    this.menu.forEach((item: any) =>{
      if(item.vegan){
        platosVeganos++;
      }
      else if(!item.vegan){
        platosNoVeganos++;
      }
    });

    this.menu = this.menu.filter((platoEnElMenu: any) => {
      //retornamos todos los ID de los platos que sean diferentes al ID del plato que seleccionó el usuario
      if(platoAeliminar.vegan){
        platosVeganos = platosVeganos - 1;
        return platoEnElMenu.id !== platoAeliminar.id;
      }
      else{
        platosNoVeganos = platosNoVeganos - 1;
        return platoEnElMenu.id !== platoAeliminar.id;
      }
    });
    //y por último retornamos el array del menú, que ya está actualizado
    console.log(this.menu + " menu luego del filter")
    return this.menu;
  }
}
