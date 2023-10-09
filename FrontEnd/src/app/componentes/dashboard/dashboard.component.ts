import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  listProducts: Products[] = []

  constructor(private _productServices: ProductsService){}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this._productServices.getProducts().subscribe(data =>{
      this.listProducts = data;
    })
  }

}
