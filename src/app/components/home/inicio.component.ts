import { Component, OnInit } from '@angular/core';
import { ImageServices, img } from '../../servicios/image.services';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',

})
export class InicioComponent implements OnInit {

  inicio: img[] = [];

  constructor( private _imageServices: ImageServices) { }

  ngOnInit() {

    this.inicio = this._imageServices.getinicio();
  }

}
