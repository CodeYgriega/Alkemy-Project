import { Component, OnInit } from '@angular/core';
import { BuscarRecetaService } from 'src/app/services/buscar-receta.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  recetasObtenidas: any = [];

  constructor(private service: BuscarRecetaService) { }

  ngOnInit(): void {
  }

  enviarYbuscarReceta(receta: string){
    this.service.buscarReceta(receta).subscribe((response:any) => {
      console.log(response);
      return this.recetasObtenidas = response.results;
    })
  }
}
