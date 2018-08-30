import { Injectable } from '@angular/core';


@Injectable()
export class GalleryServices {

    private gallery: galeria[] = [
                {
                    foto1: "assets/img/plan7.jpeg",
                    foto2: "assets/img/plan6.jpeg",
                    foto3: "assets/img/plan5.jpeg",
                    foto4: "assets/img/plan1.jpeg",
                    foto5: "assets/img/plan4.jpeg",
                    foto6: "assets/img/plan2.jpeg",
                    foto7: "assets/img/plan3.jpeg",
                }
    ];

    constructor() { }

    getgallery() {
        return this.gallery;
    }
}

// tslint:disable-next-line:class-name
export interface galeria {
    foto1: string;
    foto2: string;
    foto3: string;
    foto4: string;
    foto5: string;
    foto6: string;
    foto7: string;
}