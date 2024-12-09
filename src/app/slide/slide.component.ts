import { Component } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.css'
})
export class SlideComponent {
  slides = [
    { id: 1, img: '/assets/slide1.jpg', title: 'Slide 1' },
    { id: 2, img: '/assets/slide2.jpg', title: 'Slide 2' },
    { id: 3, img: '/assets/slide3.jpg', title: 'Slide 3' },
  ];

  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  previousSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

}
