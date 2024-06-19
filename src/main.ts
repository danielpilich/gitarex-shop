import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { ContactComponent } from './app/contact/contact.component';
import { AppComponent } from './app/app.component';
import { ProductComponent } from './app/product/product.component';
import { BlogPostComponent } from './app/blog/blog-post/blog-post.component';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'product', component: ProductComponent },
  { path: 'blog/blog-post', component: BlogPostComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch(err => console.error(err));
