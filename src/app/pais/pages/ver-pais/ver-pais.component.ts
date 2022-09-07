import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap,tap } from "rxjs/operators";
import { Country } from '../../interfaces/pais.interfase';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: Country ;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private PaisService: PaisService
      ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ( { id } ) => this.PaisService.getPaisPorAlpha( id )),
        tap( resp => console.log('pais:', resp))
      )
      .subscribe( pais => this.pais = pais[0] );

    // this.activatedRoute.params
    // .subscribe( ({ id }) => {
    //   console.log( id )

    //   this.PaisService.getPaisPorAlpha(id)
    //   .subscribe( pais => {
    //     console.log(pais)
    //   });

    // });
  }

}
