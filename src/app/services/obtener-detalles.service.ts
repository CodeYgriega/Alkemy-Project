import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObtenerDetallesService {

  //para obtener la información de un plato en específico, se requiere hacer una petición a la URL + INFO + (el id del plato) + APIKEY
  url: string = "https://api.spoonacular.com/recipes/";

  info: string = "/information?";

  apiKey: string = "apiKey=f03d14d29efa4e54b15f2fc2ac24df99";

  //inyectamos HttpClient, quien se encargará de hacer la petición GET
  constructor(private http: HttpClient) { }

  //método para hacer la petición, unificando todos los breakpoints declarados anteriormente
  obtenerInfo(id: number){
    return this.http.get(`${this.url}${id}${this.info}${this.apiKey}`);
  }
}
