import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) {   }
  getProductsList():Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>('https://fakestoreapi.com/products');
  }
  getSpecificProduct(id:any):Observable<IProduct>{
    return this.httpClient.get<IProduct>(`https://fakestoreapi.com/products/${id}`)
  }
}
