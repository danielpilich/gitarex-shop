import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private router: Router) { }

  navigateToContact() {
    console.log('Navigating to contact page');
    this.router.navigate(['/contact']);
  }

  navigateToBlogPost() {
    console.log('Navigating to blog post');
    this.router.navigate(['/blog/blog-post']);
  }
}
