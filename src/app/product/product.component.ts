import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product = {
    name: 'Fender Kurt Cobain Jaguar NOS 3TS',
    price: 250.00,
    oldPrice: 399.00,
    image: 'assets/product.webp', // Replace with actual image path
    info: [
      'Producent: Fender',
      'Design: Jaguar',
      'Body: Alder',
      'Neck: Maple'
    ],
    reviews: 120,
    rating: 4.5
  };
  quantity = 1;

  addToCart() {
    console.log(`Added ${this.quantity} of ${this.product.name} to the cart.`);
    // Implement add to cart functionality
  }
}
