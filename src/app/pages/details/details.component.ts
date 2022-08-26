import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ObtenerDetallesService } from 'src/app/services/obtener-detalles.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  idRecuperado!: number;

  platoSolicitado!: any;

  mostrarSpinner: boolean = false;

  constructor(private activateRoute: ActivatedRoute, private service: ObtenerDetallesService) { }

  ngOnInit(): void {
    this.mostrarSpinner = true;
    this.recuperarParametro();
    this.solicitarPlato(this.idRecuperado);
  }

  recuperarParametro(){
    this.activateRoute.params.subscribe(param =>{
      this.idRecuperado = param["id"];
    })
  }

  solicitarPlato(id: number){
    this.service.obtenerInfo(id).subscribe(response => {
      this.mostrarSpinner = false;
      return this.platoSolicitado = response;
    })
  }
}
