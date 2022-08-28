import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  //clase que determinará el color del cual será el spinner
  @Input() clase!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
