import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/api/products/product.service";
import {HttpErrorResponse} from "@angular/common/http";
import {dateTimestampProvider} from "rxjs/internal/scheduler/dateTimestampProvider";
import { ProductRepresentation } from '../services/api/models/product-representaion';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Array<ProductRepresentation> = [];

  constructor(
    private service: ProductService
  ) {
  }

  ngOnInit(): void {
    this.service.getAllProductsWithLimit()
      .subscribe({
        next: (result) => {
          this.products = result;
        }
      });

  }

}