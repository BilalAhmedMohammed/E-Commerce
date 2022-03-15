import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/iproduct';
// import productList from '../../../assets/products.json'
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productDetails :any;
  // products : IProduct[]=productList;
  products:any;
  activeID :any;
  constructor(private productService:ProductService,private activatedRoute : ActivatedRoute) { 
    this.activeID = this.activatedRoute.snapshot.params['id']
    // this.productDetails = this.products.find(product => product.id == activeID);
  }
  ngOnInit(): void {
    // const activeID = this.activatedRoute.snapshot.params['id']
    console.log(this.activeID);
    this.productService.getSpecificProduct(this.activeID).subscribe((data:IProduct)=>{
      console.log(data);
      this.productDetails=data;
    })

  }

}
