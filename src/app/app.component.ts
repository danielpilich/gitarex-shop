import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { DiscountBarComponent } from './discount-bar/discount-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    NavbarComponent,
    CommonModule, 
    RouterModule, 
    FooterComponent,
    DiscountBarComponent
  ],
})
export class AppComponent {
  title = "Gitarex Shop";

  constructor(private router: Router) {}

  navigateToProduct() {
    console.log('Navigating to product page');
    this.router.navigate(['/product']);
  }
}
