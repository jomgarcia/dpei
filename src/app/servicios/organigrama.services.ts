import { Injectable } from '@angular/core';

@Injectable()
export class OrganigramaService {

    private somos:somo[]=
    [
        {
          nombre: "Lic. Veranyces Ramírez",
          cargo: "Técnico en Planificación 	",
          img: "assets/img/colaboradores/Verenyces.jpg",
          tel: "8542358",
          correo:"verenyces.ramirez@dpei.uni.edu.ni"
        },
        {
          nombre: "Lic. Cristiana Samaria  ",
          cargo: "Técnico en Planificación 	",
          img: "assets/img/colaboradores/Cristiana Samaria.jpg",
          tel: "72516746",
          correo:"cristiana.samaria@dpei.uni.edu.ni"
        },
        {
          nombre: "Lic. Jhonorys Bejarano",
          cargo: "Técnico en Planificación 	",
          img: "assets/img/colaboradores/Jhonorys Bejarano.jpg",
          tel: "1941-11-01",
          correo:"jhonorys.bejarano@dpei.uni.edu.ni"
        },
        {
          nombre: "Lic. Gema Parra",
          cargo: "Técnico en Planificación 	",
          img: "assets/img/colaboradores/Gema Parra.jpg",
          tel: "1941-11-01",
          correo:"gema.parra@dpei.uni.edu.ni"
        },
        {
          nombre: "Ing. José Soza",
          cargo: "Técnico en Planificación 	",
          img: "assets/img/colaboradores/José Soza.jpg",
          tel: "1941-11-01",
          correo:"jose.soza@dpei.uni.edu.ni"
        },
        {
          nombre: "Lic. Olga",
          cargo: "Técnico en Planificación 	",
          img: "assets/img/colaboradores/Olga.jpg",
          tel: "1941-11-01",
          correo:"olga@dpei.uni.edu.ni"
        },
        {
          nombre: "Lic. Dorys Amador",
          cargo: "Técnico en Planificación 	",
          img: "assets/img/colaboradores/Dorys Amador.jpg",
          tel: "1941-11-01",
          correo:"doris.amador@dpei.uni.edu.ni"
        },
        {
          nombre: "Lic. Karla Calero",
          cargo: "Técnico en Planificación 	",
          img: "assets/img/colaboradores/Karla Calero.jpg",
          tel: "1941-11-01",
          correo:"karla.calero@dpei.uni.edu.ni"
        }
      ];


  constructor() {

console.log("servicio listo para usar");
   }


   getSomos(){
     return this.somos;
   }

}

  export interface somo{
    nombre: string;
    cargo: string;
    img: string;
    tel: string;
    correo: string;
  };
