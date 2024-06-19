import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) {}

  navigateToHome() {
    console.log('Navigating to home page');
    this.router.navigate(['']);
  }

  navigateToCategory(category: string) {
    if (category) {
      console.log(`Navigating to category: ${category}`);
      this.router.navigate(['/category', category]);
    } else {
      console.log('Navigating to categories page');
      this.router.navigate(['/categories']);
    }
  }
}
