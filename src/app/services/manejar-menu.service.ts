import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ManejarMenuService {

  //este será el array del menú, donde se almacenarán los platos elegidos por el usuario
  menu: any = [];

  //cuando el servicio se cree, consultaremos si ya hay un menú en el localStorage, si ya hay uno, lo obtendremos y el array del menú tendrá su contenido
  //y si no hay un menú previo en el localStorage, entonces se creará uno pero vacío, luego lo iremos rellenando cuando el usuario agregué platos
  constructor() {
    if(localStorage.getItem("menu")){
      this.menu = JSON.parse(localStorage.getItem("menu")!);
    }
    else{
      localStorage.setItem("menu", JSON.stringify([]));
    }
  }

  //método para retornar el array del menú
  //este método se deberá llamar desde el componente donde vamos a mostrar el array del menú
  getMenu(){
    return this.menu;
  }

  //método para agregar un plato al array del menú
  setPlatoAlMenu(plato: any){
    //variables para contar cuántos platos veganos y no veganos hay en el menú
    //las creo dentro de la función para que cada vez que se ejecute se inicialicen en 0
    let platosVeganos = 0;
    let platosNoVeganos = 0;
    //si el array NO está vacío, comenzamos a hacer las verificaciones para saber cuantos platos hay y de que tipo son
    if(this.menu.length !== 0){
      //recorremos el menu con un forEach
      this.menu.forEach((item: any) =>{
        //si un item del menu es vegano, aumentaremos la variable de platosVeganos y sino lo es, aumentamos la variable de platosNoVeganos
        if(item.vegan){
          platosVeganos++;
        }
        else if(!item.vegan){
          platosNoVeganos++;
        }
      })
      //ahora verificaremos si el plato que el usuario quiere agregar, es vegano o no
      if(plato.vegan){
        //si es vegano, accederá a la nueva condicional que consulta si platosVeganos es menor a 2, y si es así, se agregará el plato al menu
        if(platosVeganos < 2){
          //nuestro menú array será igual al contenido del menú en localStorage
          this.menu = JSON.parse(localStorage.getItem("menu")!);
          //agregamos al menú array el plato que eligió el usuario
          this.menu.push(plato);
          //y por último agregamos al localStorage el menú array actualizado
          localStorage.setItem("menu", JSON.stringify(this.menu));
          //mostraremos una alerta al usuario cuando se agregue el plato al menu
          Swal.fire({
            title: "¡Agregado con éxito!",
            icon: "success",
            confirmButtonText: "Seguir eligiendo"
          });
        }//y sino, se lanzará una alerta informando el error
        else{
          Swal.fire({
            title: "Error",
            html: "Ya hay 2 platos veganos en el menú.<br> Debes eliminar algun plato vegano para poder agregar otro.",
            icon: "error",
            confirmButtonText: "Ok"
          });
        }
      }//usaremos el mismo método para la ocasión en que el plato no sea vegano
      else if(!plato.vegan){
        if(platosNoVeganos < 2){
          //nuestro menú array será igual al contenido del menú en localStorage
          this.menu = JSON.parse(localStorage.getItem("menu")!);
          //agregamos al menú array el plato que eligió el usuario
          this.menu.push(plato);
          //y por último agregamos al localStorage el menú array actualizado
          localStorage.setItem("menu", JSON.stringify(this.menu));
          //mostraremos una alerta al usuario cuando se agregue el plato al menu
          Swal.fire({
            title: "¡Agregado con éxito!",
            icon: "success",
            confirmButtonText: "Seguir eligiendo"
          });
        }
        else{
          Swal.fire({
            title: "Error",
            html: "Ya hay 2 platos no veganos en el menú.<br> Debes eliminar algun plato no vegano para poder agregar otro.",
            icon: "error",
            confirmButtonText: "Ok"
          });
        }
      }
    }//y este else es referido al if del principio, que si el array está vacío agregará directamente el plato al menú
    else{
      //para eso nuestro menú array será igual al contenido del menú en localStorage
      this.menu = JSON.parse(localStorage.getItem("menu")!);
      //agregamos el plato elegido al menú array
      this.menu.push(plato);
      //por último agregamos el menú actualizado al localStorage
      localStorage.setItem("menu", JSON.stringify(this.menu));
      //mostraremos una alerta al usuario cuando ya se haya agregado correctamente
      Swal.fire({
        title: "¡Agregado con éxito!",
        icon: "success",
        confirmButtonText: "Seguir eligiendo"
      });
    }
  }

  //método para eliminar un plato del menú, hacemos un filter que nos devolverá un nuevo array pero sin el plato que eliminó el usuario y almacenamos el resultado en el array del menú
  //pero primero usaremos el mismo método de antes para saber cuántos platosVeganos y NoVeganos hay en el menú
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
    //nuestro menú será igual al contenido actual del menú en localStorage
    this.menu = JSON.parse(localStorage.getItem("menu")!);
    //una vez que nuestras variables ya tienen los valores de los platos, procedemos a hacer el filter
    this.menu = this.menu.filter((platoEnElMenu: any) => {
      //si el platoAeliminar es vegano le restaremos 1 a la variable de platos veganos y haremos el filter, eliminando el plato
      if(platoAeliminar.vegan){
        platosVeganos = platosVeganos - 1;
        //alerta para informar al usuario que se eliminó su plato del menú
        Swal.fire({
          title: "Se eliminó el plato del menú",
          icon: "success",
          confirmButtonText: "Ok"
        });
        //retornamos todos los ID de los platos que sean diferentes al ID del plato que seleccionó el usuario
        return platoEnElMenu.id !== platoAeliminar.id;
      }//y si no es vegano, haremos lo mismo pero con la variable de platosNoVeganos
      else{
        platosNoVeganos = platosNoVeganos - 1;
        //alerta para informar al usuario que se eliminó su plato del menú
        Swal.fire({
          title: "Se eliminó el plato del menú",
          icon: "success",
          confirmButtonText: "Ok"
        });
        return platoEnElMenu.id !== platoAeliminar.id;
      }
    });
    //agregaremos el menú array actualizado al localStorage
    localStorage.setItem("menu", JSON.stringify(this.menu));
    //y por último retornamos el array del menú, que ya está actualizado
    return this.menu;
  }
}
