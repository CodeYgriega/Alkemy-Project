import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //si hay un token en el localStorage, dejará pasar a la ruta, pero sino redireccionará hacia el login y no dejará pasar
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      this.router.navigate(["/login"]);
      return false;
    }
  }

}
