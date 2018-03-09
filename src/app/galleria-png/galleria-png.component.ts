import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'comp-galleria-png',
  templateUrl: './galleria-png.component.html',
  styleUrls: ['./galleria-png.component.css']
})
export class GalleriaPngComponent implements OnInit {

  images: any[];

  constructor() {
  }

  ngOnInit() {
    this.images = [];
    this.images.push({source: 'assets/galleria/afrique.peg', alt: 'Description for Image 1', title: 'Title 1'});
    this.images.push({source: 'assets/galleria/afrique3.jpeg', alt: 'Description for Image 2', title: 'Title 2'});
    this.images.push({source: 'assets/galleria/afrique4.jpeg', alt: 'Description for Image 3', title: 'Title 3'});
    this.images.push({source: 'assets/galleria/animaux.jpeg', alt: 'Description for Image 4', title: 'Title 4'});
    this.images.push({source: 'assets/galleria/animaux2.jpeg', alt: 'Description for Image 5', title: 'Title 5'});
    this.images.push({source: 'assets/galleria/binaire.jpeg', alt: 'Description for Image 6', title: 'Title 6'});
    this.images.push({source: 'assets/galleria/giraphe.jpeg', alt: 'Description for Image 7', title: 'Title 7'});

    this.images.push({source: 'assets/galleria/lion.jpeg', alt: 'Description for Image 2', title: 'Title 2'});
    this.images.push({source: 'assets/galleria/lion3.jpeg', alt: 'Description for Image 3', title: 'Title 3'});
    this.images.push({source: 'assets/galleria/monde.jpeg', alt: 'Description for Image 4', title: 'Title 4'});
    this.images.push({source: 'assets/galleria/processeur.jpeg', alt: 'Description for Image 5', title: 'Title 5'});
    this.images.push({source: 'assets/galleria/vegetation.jpeg', alt: 'Description for Image 6', title: 'Title 6'});
  }

}
