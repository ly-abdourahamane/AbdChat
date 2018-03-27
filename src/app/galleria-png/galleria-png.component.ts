import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'comp-galleria-png',
  templateUrl: './galleria-png.component.html',
  styleUrls: ['./galleria-png.component.css']
})
export class GalleriaPngComponent implements OnInit {

  images: any[];

  dangerousUrl: string;
  trustedUrl: SafeUrl;
  dangerousVideoUrl: string;
  videoUrl1: SafeResourceUrl;
  videoUrl2: SafeResourceUrl;
  videoUrl3: SafeResourceUrl;
  videoUrl4: SafeResourceUrl;
  videoUrl5: SafeResourceUrl;
  videoUrl6: SafeResourceUrl;
  videoUrl7: SafeResourceUrl;
  videoUrl8: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
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


    this.dangerousUrl = 'javascript:alert("Hi there")';
    this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
    this.updateVideoUrl();
  }

  updateVideoUrl() {
    this.dangerousVideoUrl = 'https://www.youtube.com/embed/' + '47sma4iDR_U';
    this.videoUrl1 =
      this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);

    this.dangerousVideoUrl = 'https://www.youtube.com/embed/' + 'AnPOdm7MSkw';
    this.videoUrl2 =
      this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);

    this.dangerousVideoUrl = 'https://www.youtube.com/embed/' + 'iEIhWZF46Ck';
    this.videoUrl3 =
      this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);

    this.dangerousVideoUrl = 'https://www.youtube.com/embed/' + 'iVUuD54-zNc';
    this.videoUrl4 =
      this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);

    this.dangerousVideoUrl = 'https://www.youtube.com/embed/' + 'oC4mS-401d0';
    this.videoUrl5 =
      this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);

    this.dangerousVideoUrl = 'https://www.youtube.com/embed/' + 'Mb1ZvUDvLDY';
    this.videoUrl6 =
      this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);

    this.dangerousVideoUrl = 'https://www.youtube.com/embed/' + '05PCmqjIeNE';
    this.videoUrl7 =
      this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);

    this.dangerousVideoUrl = 'https://www.youtube.com/embed/' + 'OZLUa8JUR18';
    this.videoUrl8 =
      this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
  }

}
