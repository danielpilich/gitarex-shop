import { Component } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { CartItem } from './item/item';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ 
    ItemComponent,
    CurrencyPipe
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(private router: Router) {}
  items: CartItem[] = [
    {icon: 'assets/product.webp', desc: 'Item 1', price: 10, quantity: 1},
    {icon: 'assets/product.webp', desc: 'Item 2', price: 20, quantity: 2},
    {icon: 'assets/product.webp', desc: 'Item 3', price: 30, quantity: 3}
  ];

  totalPrice(): number {
    return this.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  navigateToOrder() {
    console.log('Navigating to order page');
    this.router.navigate(['/order']);
  }
}
