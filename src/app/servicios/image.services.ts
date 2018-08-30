import { Injectable } from '@angular/core';

@Injectable()
export class ImageServices {

    private inicio: img[] = [
                  {
                      img1: "assets/img/people-woman-coffee-meeting.jpg",
                      img2: "assets/img/pexels-photo-953216.jpeg",
                      img3: "assets/img/pexels-photo-269825.jpeg",
                      img5: "assets/img/undraw_files1_9ool.svg",
                      img6: "assets/img/report.svg",
                      img7: "assets/img/undraw_charts_jj6t.svg"
                  }
    ];

  constructor() { }


  getinicio() {
      return this.inicio;
  }
}

// tslint:disable-next-line:class-name
export interface img {
    img1: string;
    img2: string;
    img3: string;
    img5: string;
    img6: string;
    img7: string;
}
