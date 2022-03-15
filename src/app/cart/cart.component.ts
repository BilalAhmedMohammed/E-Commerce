import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { IProduct } from '../interfaces/iproduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  productList: any = [];
  total: number = 0;
  objectQuantity: any = [];
  counter: number = 0;
  constructor(private counterService: CounterService) {}
  ngOnInit(): void {
    this.productList = this.counterService.getProducts();
    this.counterService.getCounterValue().subscribe((val) => {
      this.counter = val;
    });
    this.objectQuantity = this.counterService.getObjectQuantity();
    this.counterService.calculateTotalPrice().subscribe((val) => {
      this.total = val;
    });
  }
  increase(quantity: any, prodId: number) {
    const inc: number = parseInt(quantity.value);
    quantity.value = inc + 1;
    let edit;
    for (let i = 0; i < this.objectQuantity.length; i++) {
      if (this.objectQuantity[i].id === prodId) {
        this.objectQuantity[i].quantity = Number(quantity.value);
        edit = this.objectQuantity;
      }
    }
    this.counterService.setObjectQuantity(edit);
    this.counterService.calculateTotalPrice().subscribe((val) => {
      this.total = val;
    });
    console.log(this.counterService.getObjectQuantity());
  }
  decrease(quantity: any, prodId: number) {
    const dec: number = parseInt(quantity.value);
    if (quantity.value > 1) {
      quantity.value = dec - 1;
      let edit;
      for (let i = 0; i < this.objectQuantity.length; i++) {
        if (this.objectQuantity[i].id === prodId) {
          this.objectQuantity[i].quantity = Number(quantity.value);
          edit = this.objectQuantity;
        }
      }
      this.counterService.setObjectQuantity(edit);
      this.counterService.calculateTotalPrice().subscribe((val) => {
        this.total = val;
      });
      console.log(this.counterService.getObjectQuantity());
    }
  }
  removeThisElement(elem: IProduct) {
    this.productList = this.counterService.clearSpecificProduct(elem);
    this.counterService.setCounterValue(--this.counter);
    this.counterService.calculateTotalPrice().subscribe((val) => {
      this.total = val;
    });
  }
}
