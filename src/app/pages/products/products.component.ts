import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  dummyProducts = [
    { name: 'Product 1', description: 'Description 1', imageUrl: 'assets/images/BA.jpg' },
    { name: 'Product 2', description: 'Description 2', imageUrl: 'assets/images/banner.jpg' },
    { name: 'Product 3', description: 'Description 3', imageUrl: 'assets/images/bann.jpg' },
    { name: 'Product 1', description: 'Description 1', imageUrl: 'assets/images/BA.jpg' },
    { name: 'Product 2', description: 'Description 2', imageUrl: 'assets/images/banner.jpg' },
    { name: 'Product 3', description: 'Description 3', imageUrl: 'assets/images/bann.jpg' },
  ];

  zoomIn(event: MouseEvent) {
    const target = event.target as HTMLImageElement;
    target.classList.add('zoom-in');
  }

  zoomOut(event: MouseEvent) {
    const target = event.target as HTMLImageElement;
    target.classList.remove('zoom-in');
  }


}
