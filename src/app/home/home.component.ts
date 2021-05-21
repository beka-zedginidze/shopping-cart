import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  static numberOfAddProducts(numberOfAddProducts: any) {
    throw new Error('Method not implemented.');
  }
  static cartProductList: any;

  constructor() { }

  productList = [
    {
      id: 1,
      imageUrl: "https://www.digitalstorm.com/img/products/lumos/2020-overview-4-a.jpg",
      name: "Gaming PC 1",
      description: "lorem ipsum lorem impsum lorem impsum",
      price: "1200$"
    },
    {
      id: 2,
      imageUrl: "https://www.digitalstorm.com/img/products/lumos/2020-overview-2-b.jpg",
      name: "Gaming PC 2",
      description: "lorem ipsum lorem impsum lorem impsum",
      price: "1300$"
    },
    {
      id: 3,
      imageUrl: "https://www.deltarentals.com.au/wp-content/uploads/2019/04/Custom-Gaming-PC-1.jpg",
      name: "Gaming PC 3",
      description: "lorem ipsum lorem impsum lorem impsum",
      price: "1400$"
    },
    {
      id: 4,
      imageUrl: "https://www.cyberpowersystem.co.uk/images/cs/onyxia2/CS-450-148_400.png",
      name: "Gaming PC 4",
      description: "lorem ipsum lorem impsum lorem impsum",
      price: "1500$"
    },
    {
      id: 5,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNYKU3DgmM2LLtzzzTW7HClwZ6Y9JbtJFnuDPYFfF6bi2W4EGExdV-QPKiO2r2OfMltq4&usqp=CAU",
      name: "Gaming PC 5",
      description: "lorem ipsum lorem impsum lorem impsum",
      price: "1600$"
    },
    {
      id: 6,
      imageUrl: "https://www.rollingstone.com/wp-content/uploads/2021/01/Screen-Shot-2021-01-25-at-8.53.18-AM.png?w=862",
      name: "Gaming PC 6",
      description: "lorem ipsum lorem impsum lorem impsum",
      price: "1700$"
    }

  ]
 
  addProductToCart(product: { name: any; }) {
    const productExistInCart = NavComponent.cartProductList.find(({name}) => name === product.name);
    if (!productExistInCart) {
      NavComponent.cartProductList.push({...product, num:1});
      return;
    }
    productExistInCart.num += 1;
  }

  removeItem(id: number){
    this.productList = this.productList.filter(item => item.id !== id);
  }
 
  ngOnInit(): void {
  }

}
