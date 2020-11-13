import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Product } from '../Models/Model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private api_service:ApiserviceService) { }
  products:Product;
  ngOnInit() {
    this.api_service.getProducts().subscribe(
      (response =>{
        console.log(response);
        let product = response;
        this.products = product[0];
      }),
      (error=>{
        alert('Api not working');
      })
    );

  }

}
