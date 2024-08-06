import { Injectable } from '@angular/core';
import { Product } from './model/Product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url: string;
  product: Product;
  productarr: Product[];
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3004/products';
    this.product = new Product();
    this.productarr = [];
  }
  insertProduct(product: Product) {
    this.http.post<Product>(this.url, product).subscribe();
    return 'Product Detail Added';
  }

  updateProduct(product: Product) {
    this.http.put<Product>(this.url + '/' + product.id, product).subscribe();
    return 'Product Detail Updated';
  }

  deleteProduct(proid: number) {
    this.http.delete<Product>(this.url + '/' + proid).subscribe();
    return 'Product Details Deleted';
  }

  findProduct(proid: number) {
    this.http.get<Product>(this.url + '/' + proid).subscribe((data) => (this.product = data));
    return this.product;
  }

  findAllProduct() {
    this.http.get<Product[]>(this.url).subscribe(data => this.productarr = data);
    return this.productarr;
  }
}
