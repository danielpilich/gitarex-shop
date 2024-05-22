import { Component } from '@angular/core';
import { PromotionalBannersComponent } from './promotional-banners/promotional-banners.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [ PromotionalBannersComponent]
})
export class AppComponent {
  title = "Gitarex Shop";
}
