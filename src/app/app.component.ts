import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [CommonModule, RouterModule]
})
export class AppComponent {
  title = "Gitarex Shop";

  constructor(private router: Router) {}

  navigateToContact() {
    console.log('Navigating to contact page');
    this.router.navigate(['/contact']);
  }
}
