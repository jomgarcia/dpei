import { Component, OnInit } from '@angular/core';
import { OrganigramaService, somo} from '../../servicios/organigrama.services';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styles: []
})
export class ColaboradoresComponent implements OnInit {

  somos:somo[]= [];

  constructor( private _organigramaService:OrganigramaService) {

   }

  ngOnInit() {

     this.somos = this._organigramaService.getSomos();
        console.log(this.somos);
  }

}
