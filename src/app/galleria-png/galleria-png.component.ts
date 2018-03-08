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
    this.images.push({source: 'assets/galleria/afrique.jpeg', alt: 'Description for Image 1', title: 'Title 1'});
    this.images.push({source: 'assets/galleria/afrique2.png', alt: 'Description for Image 2', title: 'Title 2'});
    this.images.push({source: 'assets/galleria/conakry.jpeg', alt: 'Description for Image 3', title: 'Title 3'});
    this.images.push({source: 'assets/galleria/guinee.png', alt: 'Description for Image 4', title: 'Title 4'});
    this.images.push({source: 'assets/galleria/guinee2.jpeg', alt: 'Description for Image 5', title: 'Title 5'});
    this.images.push({source: 'assets/galleria/guinee3.jpeg', alt: 'Description for Image 6', title: 'Title 6'});
    this.images.push({source: 'assets/galleria/guinee4.jpeg', alt: 'Description for Image 7', title: 'Title 7'});
  }

}
