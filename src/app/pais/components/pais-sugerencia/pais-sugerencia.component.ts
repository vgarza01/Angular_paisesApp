import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Country } from '../../interfaces/pais.interfase';

@Component({
  selector: 'app-pais-sugerencia',
  templateUrl: './pais-sugerencia.component.html',
  styles: [
   `
   li {
    cursor: pointer;
}`
  ]
})
export class PaisSugerenciaComponent implements OnInit {
  
  @Output() onClick:    EventEmitter<string> = new EventEmitter();
 
  
  @Input() paisesSugeridos: Country[] = [];
  @Input() mostrarSugerencias: boolean = false;
  @Input() termino: string ='';

  buscar( termino: string ) {
    this.onClick.emit( termino );
    console.log( 'term',termino );
  }

  constructor() { }

  ngOnInit(): void {
  }

}
