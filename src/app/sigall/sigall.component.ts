import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'comp-sigall',
  templateUrl: './sigall.component.html',
  styleUrls: ['./sigall.component.css']
})
export class SigallComponent implements OnInit {

  dangerousUrl: string;
  trustedUrl: SafeUrl;
  dangerousVideoUrl: string;
  videoUrl: SafeResourceUrl;

  disciplines = [
    {name: 'Algorithmique', path: '/algorithmique'},
    {name: 'Comflex', path: '/comflex'},
    {name: 'Java EE', path: '/java-ee'},
    {name: 'Mapi', path: '/mapi'},
    {name: 'MCO', path: '/modelisation-objet'},
    {name: 'TLC', path: 'tlc'},
    {name: 'Prog parallèle', path: 'programmation-parallele'},
    {name: 'Angular', path: 'angular'}
  ];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.dangerousUrl = 'javascript:alert("Hi there")';
    this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
    this.updateVideoUrl('47sma4iDR_U');
  }

  updateVideoUrl(id: string) {
    this.dangerousVideoUrl = 'https://www.youtube.com/embed/' + id;
    this.videoUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
  }

}
