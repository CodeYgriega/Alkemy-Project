import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SearchComponent } from './pages/search/search.component';
import { MenuComponent } from './pages/home/menu/menu.component';
import { PlatoCardComponent } from './pages/home/plato-card/plato-card.component';
import { FormSearchComponent } from './pages/search/form-search/form-search.component';
import { HorasYminutosPipePipe } from './pipes/horas-yminutos-pipe.pipe';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { DetailsCardComponent } from './pages/details/details-card/details-card.component';
import { ListaPlatosComponent } from './pages/search/lista-platos/lista-platos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DetailsComponent,
    NavbarComponent,
    SearchComponent,
    FormSearchComponent,
    MenuComponent,
    PlatoCardComponent,
    HorasYminutosPipePipe,
    SpinnerComponent,
    DetailsCardComponent,
    ListaPlatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
