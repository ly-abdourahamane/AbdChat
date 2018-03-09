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
    this.images.push({source: 'assets/galleria/afrique.jpeg', alt: 'Description de l\'image', title: 'Titre 1'});
    this.images.push({source: 'assets/galleria/afrique3.jpeg', alt: 'Description de l\'image', title: 'Titre 2'});
    this.images.push({source: 'assets/galleria/afrique4.jpeg', alt: 'Description de l\'image', title: 'Title 11'});
    this.images.push({source: 'assets/galleria/animaux.jpeg', alt: 'Description de l\'image', title: 'Titre 12'});

    this.images.push({source: 'assets/galleria/animaux2.jpeg', alt: 'Description de l\'image', title: 'Titre 5'});
    this.images.push({source: 'assets/galleria/binaire.jpeg', alt: 'Description de l\'image', title: 'Titre 6'});
    this.images.push({source: 'assets/galleria/giraphe.jpeg', alt: 'Description de l\'image', title: 'Title 7'});

    this.images.push({source: 'assets/galleria/lion.jpeg', alt: 'Description de l\'image', title: 'Titre 3'});
    this.images.push({source: 'assets/galleria/lion3.jpeg', alt: 'Description de l\'image', title: 'Titre 4'});
    this.images.push({source: 'assets/galleria/monde.jpeg', alt: 'Description de l\'image', title: 'Titre 8'});
    this.images.push({source: 'assets/galleria/processeur.jpeg', alt: 'Description de l\'image', title: 'Titre 9'});
    this.images.push({source: 'assets/galleria/vegetation.png', alt: 'Description de l\'image', title: 'Titre 10'});
    this.images.push({source: 'assets/galleria/vegetation.jpeg', alt: 'Description de l\'image', title: 'Titre 13'});

  }

}
