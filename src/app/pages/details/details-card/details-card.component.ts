import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss']
})
export class DetailsCardComponent implements OnInit {

  //el plato que se recibirá del componente padre
  @Input() plato!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
