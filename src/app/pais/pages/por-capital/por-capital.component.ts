import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfase';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  termino: string ='';
  hayError: boolean = false;
  paises: Country[] = [];
  mostrarSugerencias: boolean = false;
  paisesSugeridos: Country[] = [];

  constructor(private paisService: PaisService) { }

buscar(termino: string){
  this.hayError = false;
  this.termino = termino;
  console.log(this.termino);

  this.paisService.buscarCapital( this.termino )
  .subscribe( (paises) => {
    console.log(paises);
    this.paises = paises;
  }, (err) => {
    this.hayError = true;
    this.paises = [];
  });
  }

  sugerencias( termino: string) {
    if (termino.length <= 0 ) {
      this.mostrarSugerencias = false;
      return;
     }
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.paisService.buscarCapital( termino )
      .subscribe( 
        paises => this.paisesSugeridos = paises.splice(0,5), 
        (err) => this.paisesSugeridos = []
        );
  }

}
