import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/home/menu/menu.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path: "menu", component: MenuComponent, canActivate: [AuthGuardGuard]},
  {path: "home", component: HomeComponent, canActivate: [AuthGuardGuard]},
  {path: "login", component: LoginComponent},
  {path: "", component: HomeComponent, canActivate: [AuthGuardGuard]},
  {path: "**", redirectTo: "", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
