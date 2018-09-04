import { Component, OnInit } from '@angular/core';
import { GalleryServices, galeria } from '../../servicios/gallery.services';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {


  gallery: galeria[] = [];

  constructor( private _galleryServices: GalleryServices) { }


  ngOnInit() {
    this.gallery =  this._galleryServices.getgallery();
  }
}
