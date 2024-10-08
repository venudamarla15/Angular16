import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {


  @Input() productListComp = undefined;

  product: Product ;

  ngOnInit(){
 
    this.product = this.productListComp.selectedProduct;
    console.log(this.product);
  }
}
