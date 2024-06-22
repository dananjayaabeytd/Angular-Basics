import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/api/products/product.service';
import { ProductRepresentation } from '../services/api/models/product-representaion';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit{

  constructor(
    private activatedRoute: ActivatedRoute,
    private service:ProductService
  ){
    
  }

  param: any ;
  queryParam:any;

  ngOnInit(): void {
    

    console.log(this.activatedRoute)
    this.param = this.activatedRoute.snapshot.params['username'];
    this.queryParam = this.activatedRoute
      .snapshot
      .queryParams['course'];

      //get products 
      // this.service.getAllProductsWithLimit()
      // .subscribe({
      //   next:(data)=>{
      //     console.log(data)
      //   }
      // })


      const product:ProductRepresentation = {
        title: 'My Product',
        description : 'product description',
        price: 15,
        category: 'electronics',
        image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg'
      }

      this.service.createProduct(product)
      .subscribe({
        next:(data)=>{
          console.log(data)
        },
        error:(error:HttpErrorResponse)=>{

          if(error instanceof ErrorEvent){
            console.log('CError has Occured -> '+ error)
          }else{
            console.log(`Server returned status code ${error.status},error message : ${error.message}`)
          }
          
          
        }
      })




  }

}
