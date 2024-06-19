import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { DiscountBarComponent } from './discount-bar/discount-bar.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    NavbarComponent,
    CommonModule, 
    RouterModule, 
    FooterComponent,
    DiscountBarComponent,
    HttpClientModule
  ],
})
export class AppComponent {
  title = "Gitarex Shop";
}
