import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  cartData = new EventEmitter<any[] | []>();
  search=new BehaviorSubject("")

  constructor(private http: HttpClient, private router:Router) { }
  addNewProduct(productData:any){
    return this.http.post('http://localhost:3000/products/',productData)
  }

  viewAllProduct(){
    return this.http.get('http://localhost:3000/products')
   }
   viewProduct(productId:any){
    return this.http.get('http://localhost:3000/products/'+productId)
   }
   UpdateProduct(productId:any,productData:any){
    return this.http.put('http://localhost:3000/products/'+productId,productData)
  }
  Deleteproduct(productId:any){
    return this.http.delete('http://localhost:3000/products/'+productId)
  }

  localAddtocart(data:any){
    let cartData =[]
    let localcart = localStorage.getItem('localcart')
    if(!localcart){
      localStorage.setItem('localcart',JSON.stringify([data]))

    }
    else{
      cartData=JSON.parse(localcart)
      cartData.push(data)
      localStorage.setItem('localcart',JSON.stringify(cartData))
      this.cartData.emit(cartData);
   
    }
  }
  removeItemFromCart(productId: number) {
    let cartData = localStorage.getItem('localcart');
    if (cartData) {
      let items: any[] = JSON.parse(cartData);
      items = items.filter((item: any) => productId !== item.id);
      localStorage.setItem('localcart', JSON.stringify(items));
      this.cartData.emit(items);
    }
  }
  addToCart(cartData: any) {
    return this.http.post('http://localhost:3000/cart', cartData);
  }


}
