import { Component } from '@angular/core';
import { PromotionalBannersComponent } from './promotional-banners/promotional-banners.component';
import { CategoriesComponent } from './categories/categories.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [ PromotionalBannersComponent,CategoriesComponent]
})
export class AppComponent {
  title = "Gitarex Shop";
}
