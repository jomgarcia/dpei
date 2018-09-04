import { Injectable } from '@angular/core';

@Injectable()
export class OrganigramaService {

    private somos: somo[]=
    [
        {
          nombre: "Lic. Veranyces Ramírez",
          cargo: "Responsable de oficina de Seguimiento",
          img: "assets/img/colaboradores/Verenyces.jpg",
          tel: "",
          correo:"veranyces.ramirez@dpei.uni.edu.ni"
        },
        {
          nombre: "Lic. Cristiana Samara  ",
          cargo: "Técnico en Planificación y Seguimiento",
          img: "assets/img/colaboradores/Cristiana Samaria.jpg",
          tel: "",
          correo:"cristiana.samara@dpei.uni.edu.ni"
        },
        {
          nombre: "Lic. Jhonorys Bejarano",
          cargo: "Responsable de oficina de Información y Estadística",
          img: "assets/img/colaboradores/Jhonorys Bejarano.jpg",
          tel: "",
          correo:"jhonorys.bejarano@dpei.uni.edu.ni"
        },
        {
          nombre: "Lic. Gema Parra",
          cargo: "Técnico en Planificación y Seguimiento",
          img: "assets/img/colaboradores/Gema Parra.jpg",
          tel: "",
          correo:"gema.parra@dpei.uni.edu.ni"
        },
        {
          nombre: "Ing. José Soza",
          cargo: "Técnico en Planificación y Seguimiento",
          img: "assets/img/colaboradores/José Soza.jpg",
          tel: "",
          correo:"jose.soza@dpei.uni.edu.ni"
        },
        {
          nombre: "Lic. Olga Gómez",
          cargo: "Asistente",
          img: "assets/img/colaboradores/Olga.jpg",
          tel: "",
          correo:"olga@dpei.uni.edu.ni"
        },
        {
          nombre: "Lic. Dorys Amador",
          cargo: "Técnico en Planificación y Seguimiento",
          img: "assets/img/colaboradores/Dorys Amador.jpg",
          tel: "",
          correo:"doris.amador@dpei.uni.edu.ni"
        },
        {
          nombre: "Lic. Karla Calero",
          cargo: "Especialista en Información y Estadística",
          img: "assets/img/colaboradores/Karla Calero.jpg",
          tel: "",
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
