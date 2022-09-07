import { Component, OnInit } from '@angular/core';

import { Country } from '../../interfaces/pais.interfase';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  regionActiva: string = '';

  termino: string ='';
  hayError: boolean = false;
  paises : Country[] = [];

  constructor(private paisService: PaisService ) { }

  ngOnInit(): void {
  }

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);
  
    this.paisService.buscarRegion( this.termino )
    .subscribe( (paises) => {
      console.log(paises);
      this.paises = paises;
  
    }, (err) => {
      this.hayError = true;
      this.paises = [];
    });
  
  }

  getClassCSS( region: string) {
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary'
  }
  activaRegion( region: string ){
    if (region === this.regionActiva) { return; }
    this.regionActiva = region;
    this.paises = [];
    this.buscar( region );
  }
}
