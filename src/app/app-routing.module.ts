import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/home/menu/menu.component';
import { LoginComponent } from './pages/login/login.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {path: "details/:id", component: DetailsComponent, canActivate: [AuthGuardGuard]},
  {path: "search", component: SearchComponent, canActivate: [AuthGuardGuard]},
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
