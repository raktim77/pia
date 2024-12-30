import { Component, Inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit,OnChanges{
  @Input() images: string[] = [];  // Input to pass images to the modal
  @Input() isVisible: boolean = false; // Control visibility of the modal

  // Method to show the modal
  openModal() {
    this.isVisible = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // When the images input changes, ensure the modal is re-initialized
    if (changes['images'] && this.images.length > 0) {
      this.openModal();
    }
  }

  // Method to close the modal
  closeModal() {
    this.isVisible = false;
    this.selectedImage = null; //
  }

  ngOnInit(): void {
    console.log('opened');
    console.log(this.images);
    
    
  }

  closeModalOnBackgroundClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }

  selectedImage: string | null = null; // Track the curren
    // Open an image in large view
    openLargeView(image: string): void {
      this.selectedImage = image;
    }
  
    // Close the large view
    closeLargeView(): void {
      this.selectedImage = null;
    }

}
