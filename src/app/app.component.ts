import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    NavbarComponent,
    CommonModule, 
    RouterModule, 
    FooterComponent
  ],
})
export class AppComponent {
  title = "Gitarex Shop";

  constructor(private router: Router) {}

  navigateToContact() {
    console.log('Navigating to contact page');
    this.router.navigate(['/contact']);
  }
  navigateToProduct() {
    console.log('Navigating to product page');
    this.router.navigate(['/product']);
  }
}
