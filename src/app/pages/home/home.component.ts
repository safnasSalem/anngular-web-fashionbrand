import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})

export class HomeComponent {
  items: string[] = ['Item 1', 'Item 2', 'Item 3']; // Initial list of items
  newItem: string = ''; // Variable to store the new item input

  addItem() {
    if (this.newItem.trim() !== '') { // Check if the input is not empty
      this.items.push(this.newItem); // Add the new item to the list
      this.newItem = ''; // Clear the input field
      
    }
  }
  images = [
    '../../../assets/images/nb2.jpg',
    '../../../assets/images/nb3.jpg',
    '../../../assets/images/nnb.jpg',
    '../../../assets/images/banner2.jpg'
  ];

  currentIndex = 0;
  interval: any;

  ngOnInit() {
    // Start the automatic sliding
    this.startSliding();
  }

  startSliding() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 3000); // Adjust the interval (in milliseconds) for automatic sliding
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  ngOnDestroy() {
    // Clear the interval when the component is destroyed
    clearInterval(this.interval);
  }
}
