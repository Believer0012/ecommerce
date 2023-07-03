import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  cartData:any|undefined
  priceSummary:any = {
    price: 0,
    discount: 0,
    tax: 0,
    delivery: 0,
    total: 0
  }
constructor(private ps: ProductService, private router: Router){}
ngOnInit(): void {
// //  this.ps.currentCart().subscribe((result)=>{
// //   this.cartData=result
// //   console.log("this",this.cartData);
  

//  })
this.loadDetails()

 }
 removeToCart(cartId:number|undefined){
  cartId && this.cartData && this.ps.removeToCart(cartId)
  .subscribe((result)=>{
    this.loadDetails();
  })


}

loadDetails(){
  this.ps.currentCart().subscribe((result) => {
    this.cartData = result;
    console.warn(this.cartData);
    let price = 0;
    result.forEach((item) => {
      if (item.quantity) {
        price = price + (+item.price * +item.quantity)
      }
    })
    this.priceSummary.price = price;
    this.priceSummary.discount = price / 10;
    this.priceSummary.tax = price / 10;
    this.priceSummary.delivery = 100;
    this.priceSummary.total = price + (price / 10) + 100 - (price / 10);

  if(!this.cartData.length){
    this.router.navigate(['/'])
  }

  })
}




checkout() {
  this.router.navigate(['/checkout'])
}

}