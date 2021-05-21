import { Component, OnInit, Input } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent extends NavComponent{

  newList = NavComponent.cartProductList;

  numberOfItem = this.newList.length;


  removeItem(id: any){
    this.newList = this.newList.filter(item => item.id !== id);
    this.numberOfItem -= 1;
  }

}
