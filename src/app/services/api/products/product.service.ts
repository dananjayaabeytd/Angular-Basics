import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string = 'https://fakestoreapi.com/'

  constructor() { }


  getAllProductsWithLimit(limit:number = 5):void{
    // const productsUrl2:string = this.baseUrl + '/products?limit=' + 5
    const productsUrl:string = `${this.baseUrl} + '/products?limit=' + ${limit}`
  }
}
