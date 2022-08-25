import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginInterface } from '../models/login-interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //URL donde se enviarán los datos del LOGIN, nos devolverá un error si los datos no son válidos, y un token si los datos son correctos
  url = "http://challenge-react.alkemy.org/";

  //inyectamos "HttpClient", etsa dependencia se encargará de hacer las peticiones
  constructor(private http: HttpClient) { }

  //método POST que envía los datos del formulario de LOGIN a la URL especificada
  post(form: LoginInterface){
    //primero especificamos a DONDE enviaremos la información y después especificamos QUÉ enviaremos (en este caso el form de LOGIN)
    return this.http.post(this.url, form);
  }
}
