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
