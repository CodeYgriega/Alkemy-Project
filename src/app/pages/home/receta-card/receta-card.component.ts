import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-receta-card',
  templateUrl: './receta-card.component.html',
  styleUrls: ['./receta-card.component.scss']
})
export class RecetaCardComponent implements OnInit {

  //el "plato" que reciba, será cada uno de los resultados de la búsqueda del usuario, y con sus datos rellenaremos la CARD
  @Input() plato!: any;
  //el texto que reciba, será el que se mostrará en el botón referido al menú (usamos 2: "Añadir al menú" y "Eliminar del menú")
  @Input() textoBotonMenu!: string;
  //el texto que reciba se interpretará como una clase de Bootstrap, cambiando el color del botón referido al menú (usamos 2: "primary" para el color azul y "danger" para el color rojo)
  @Input() claseBotonMenu!: string;

  //vamos a emitir el plato que fue clickeado, y en los componentes padres donde usemos la CARD, con este evento ya sabremos cuál plato fue clickeado
  @Output() platoClickeado: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  //método para emitir el plato que fue clickeado, toma como parámetro el plato
  capturarPlatoClickeado(plato: any){
    //nos referimos al Output creado y usamos emit, pasándole como parámetro el plato clickeado
    this.platoClickeado.emit(plato);
  }

}
