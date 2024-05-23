import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { ContactComponent } from './app/contact/contact.component';
import { AppComponent } from './app/app.component';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch(err => console.error(err));
