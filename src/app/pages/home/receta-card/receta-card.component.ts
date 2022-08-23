import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-receta-card',
  templateUrl: './receta-card.component.html',
  styleUrls: ['./receta-card.component.scss']
})
export class RecetaCardComponent implements OnInit {

  @Input() receta!: any;

  constructor() { }

  ngOnInit(): void {
  }

  capturarPlato(plato: any){

  }

}
