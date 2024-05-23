import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionalBannersComponent } from './../promotional-banners/promotional-banners.component';
import { CategoriesComponent } from './../categories/categories.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PromotionalBannersComponent, CategoriesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
