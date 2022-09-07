import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from "rxjs/operators";
import { Country } from '../../interfaces/pais.interfase';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: []
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter:    EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeHolder: string = '';
  debouncer : Subject<string> = new Subject();

  termino: string= '';

  buscar( ) {
    this.onEnter.emit( this.termino )
  }

  teclaPresionada( ) {
    this.debouncer.next( this.termino)
  }
  constructor() { }

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(600))
      .subscribe( valor => {
      this.onDebounce.emit( valor );
      console.log(valor);
    })
  }

}
