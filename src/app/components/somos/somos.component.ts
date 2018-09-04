import { Component, OnInit } from '@angular/core';
import { SomosService, whos } from '../../servicios/somos.service';



@Component({
  selector: 'app-somos',
  templateUrl: './somos.component.html',
})
export class SomosComponent  implements OnInit {


    somos: whos[] =  [];


  constructor( private _SomosService: SomosService){

  }

  ngOnInit() {
     this.somos = this._SomosService.getsomos();
  }


}
