import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [FooterComponent],
})
export class AppComponent { 
  title = "Gitarex Shop";
}
