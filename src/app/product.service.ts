import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'assets/product.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.productsUrl);
  }

  getProductById(id: number): Observable<any> {
    return new Observable(observer => {
      this.getProducts().subscribe(products => {
        const product = products.find(p => p.id === id);
        observer.next(product);
        observer.complete();
      });
    });
  }
}
