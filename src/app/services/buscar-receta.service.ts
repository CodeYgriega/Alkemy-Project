import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuscarRecetaService {

  //para hacer un get a esta url y obtener los platos coincidentes con la busqueda, se necesita este link y se debe agregar "&" cada vez que agreguemos un modificador, y debe terminar con la apiKey.
  url: string = "https://api.spoonacular.com/recipes/complexSearch?query=";

  adherirInfo: string = "addRecipeInformation=true";

  //este es el numero de resultados que se obtendrá por cada llamado a la API, en este caso lo dejaré en 12 para no ser excesivos en cada búsqueda.
  numeroDeResultados: string = "number=12";

  //esta es la apiKey otorgada para poder hacer llamados a la API.
  apiKey: string = "apiKey=f03d14d29efa4e54b15f2fc2ac24df99";

  constructor(private http: HttpClient) { }

  buscarReceta(receta:string){
    return this.http.get(`${this.url}${receta}&${this.adherirInfo}&${this.numeroDeResultados}&${this.apiKey}`);
  }

}
