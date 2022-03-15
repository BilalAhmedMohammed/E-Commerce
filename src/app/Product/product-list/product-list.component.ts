import { Component, OnInit } from '@angular/core';
import {IProduct} from '../../interfaces/iproduct';
// import productList from '../../../assets/products.json';
import { ProductService } from 'src/app/services/product.service';
import { Observable } from 'rxjs';
import { CounterService } from 'src/app/services/counter.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  // products:IProduct[] =productList;
  products:any;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getProductsList().subscribe(
      (data)=>{
        this.products=data;
      }
    )
  }

}
