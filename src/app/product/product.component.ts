import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: any = {};
  quantity = 1;

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = +params['id'];
      this.loadProductData(productId);
    });
  }

  loadProductData(id: number) {
    this.productService.getProductById(id).subscribe(data => {
      this.product = data;
    });
  }

  addToCart() {
    console.log(`Added ${this.quantity} of ${this.product.name} to the cart.`);
    // Implement add to cart functionality
  }
}
