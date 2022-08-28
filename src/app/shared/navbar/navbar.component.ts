import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  //inyectamos Router para hacer las redirecciones a otras secciones de la página
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  //método que eliminará el token del localStorage y al hacerlo, redireccionará hacia el login
  cerrarSesion(){
    localStorage.removeItem("token");
    this.router.navigate(["/login"]);
  }
}
