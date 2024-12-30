import { Component } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-surprise',
  templateUrl: './surprise.component.html',
  styleUrls: ['./surprise.component.scss']
})
export class SurpriseComponent {
  showingVideo = false;
  videoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/watch?v=Ar84PDWCnLk');
  }

  showVideo(): void {
    this.showingVideo = true;
  }
}
