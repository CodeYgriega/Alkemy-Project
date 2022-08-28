import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuscarRecetaService {

  //URL de la API donde se enviarán las peticiones
  //para hacer un get a esta url y obtener los platos coincidentes con la busqueda, se necesita este link y se debe agregar "&" cada vez que agreguemos un nuevo endpoint, y siempre debe terminar con la apiKey
  url: string = "https://api.spoonacular.com/recipes/complexSearch?query=";

  //este endpoint toma valores booleanos, si se usa y se establece en "true" se recibira informacion adicional sobre el plato buscado y si se establece en "false", solo se recibira la información mínima
  adherirInfo: string = "addRecipeInformation=true";

  //este es el numero de resultados que se obtendrá por cada llamado a la API, en este caso lo dejaré en 12 para no ser excesivos en cada búsqueda
  numeroDeResultados: string = "number=12";

  //esta es la apiKey otorgada para poder hacer llamados a la API.
  apiKey: string = "apiKey=f03d14d29efa4e54b15f2fc2ac24df99";

  //inyectamos "HttpClient", esta dependencia será la encargada de hacer nuestras peticiones a la API
  constructor(private http: HttpClient) { }

  //método para hacer un GET utilizando los endpoints antes declarados
  buscarReceta(plato: string){
    //el endpoint final es la URL + el plato que escribió el usuario + & + adherirINFO + & + numeroDeResultados + & + apiKey
    return this.http.get(`${this.url}${plato}&${this.adherirInfo}&${this.numeroDeResultados}&${this.apiKey}`);
  }

}
