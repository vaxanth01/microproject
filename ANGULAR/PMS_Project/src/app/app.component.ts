import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './model/Product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EMSProject';
  product: Product;
  result: string;
  productarr:Product[];
  flag:boolean;

  constructor(private service: ProductService) {
    this.product = new Product();
    this.result = '';
    this.productarr=[];
    this.flag=false;
  }

  insertProduct(data: any) {
    this.product.id = data.proid;
    this.product.proName = data.proName;
    this.product.proPrice = data.proPrice;
    this.product.proimg = data.proimg;
    this.product.procount = data.procount;
    alert(data.proid + ' ' + data.proName + ' ' + data.proPrice + ' ' + data.proimg + ' ' + data.procount);

    this.result = this.service.insertProduct(this.product);
  }

  updateProduct(data: any) {
    this.product.id = data.proid;
    this.product.proName = data.proName;
    this.product.proPrice = data.proPrice;
    alert(data.id + ' ' + data.proName + ' ' + data.proPrice+ ' ' + data.procount + ' ' + data.proimg);

    this.result = this.service.updateProduct(this.product);
  }
  deleteProduct(data: any) {
    this.result = this.service.deleteProduct(data.proid);
  }
  findProduct(data: any) {
    this.product=this.service.findProduct(data.proid);
    this.result=this.product.id+" "+ this.product.proName +" "+this.product.proPrice+" "+this.product.procount+" "+this.product.proimg;
  }
  findAllProduct(){
    this.productarr=this.service.findAllProduct();
    this.flag=true;
  }
}