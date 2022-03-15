import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private counter = new BehaviorSubject(0);
  private totalPrice = new BehaviorSubject(0);
  private products: IProduct[] = [];
  private objectsQuantity: any[] = [];
  addToCart(product: IProduct) {
    if (!this.products.includes(product)) {
      this.products.push(product);
      this.objectsQuantity.push({ id: product.id, quantity: 1 });
      return true;
    }
    return false;
  }
  getProducts() {
    return this.products;
  }
  calculateTotalPrice() {
    const products = this.products;
    var total: number = 0;
    for (let i=0;i<products.length;i++)
    {
      const multiply=products[i].price*this.objectsQuantity[i].quantity;
      console.log(multiply);
      total+=multiply;
    }
    this.totalPrice.next(total);
    return this.totalPrice;
  }
  clearSpecificProduct(elem: IProduct) {
    const result = this.products.filter((product) => product !== elem);
    const edit = this.objectsQuantity.filter((obj) => obj.id !== elem.id);
    this.objectsQuantity = edit;
    console.log(this.objectsQuantity);
    this.products = result;
    return this.products;
  }
  setObjectQuantity(newObj:any[]){
    this.objectsQuantity=newObj;
  }
  getObjectQuantity(){
    return this.objectsQuantity;
  }
  getCounterValue() {
    return this.counter;
  }
  setCounterValue(newCounterVal: number) {
    this.counter.next(newCounterVal);
  }
}
