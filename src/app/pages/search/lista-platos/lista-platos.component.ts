import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lista-platos',
  templateUrl: './lista-platos.component.html',
  styleUrls: ['./lista-platos.component.scss']
})
export class ListaPlatosComponent implements OnInit {

  @Output() platoClickeado: EventEmitter<any> = new EventEmitter();

  @Input() platosParaMostrar = [];
  @Input() clasesContenedor!: string;
  @Input() claseBotonMenu_!: string;
  @Input() textoBotonMenu_!: string;
  @Input() funcion!: any;

  constructor() { }

  ngOnInit(): void {
  }

  emitir(_event: any){
    return this.platoClickeado.emit(_event);
  }
}
