import { Component, Input } from '@angular/core';
import { CartItem } from './item';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-item',
  standalone: true,
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
  imports: [CurrencyPipe],
})
export class ItemComponent {
  @Input() item!: CartItem;
}
