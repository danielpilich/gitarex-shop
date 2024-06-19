import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { ContactComponent } from './app/contact/contact.component';
import { AppComponent } from './app/app.component';
import { ProductComponent } from './app/product/product.component';
import { BlogPostComponent } from './app/blog/blog-post/blog-post.component';
import { CategoryComponent } from './app/category/category.component';
import { CategoriesComponent } from './app/categories/categories.component';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'blog/blog-post', component: BlogPostComponent },
  { path: 'category/:category', component: CategoryComponent },
  { path: 'categories', component: CategoriesComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule)
  ],
}).catch(err => console.error(err));
