import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-view-product',
  templateUrl: './user-view-product.component.html',
  styleUrls: ['./user-view-product.component.css']
})
export class UserViewProductComponent {
  proId:any
  cartData:any|undefined;
  productQuantity:number=1;
  removeCart=false;
  productData:undefined|any
  constructor(private ps:ProductService,private ar:ActivatedRoute,private router:Router){}
  ngOnInit(){
  
    this.ar.params.subscribe((data)=>{

      this.proId=data['id']
      //console.log(this.proId);
      this.ps.viewProduct(this.proId).subscribe((data:any)=>{
        this.productData=data
        

        let cartData= localStorage.getItem('localCart');
        if(this.proId && cartData){
          let items = JSON.parse(cartData);
          items = items.filter((item:any)=>this.proId=== item.id.toString());
          if(items.length){
            this.removeCart=true
          }else{
            this.removeCart=false
          }
        }
        
      })
    })
  }
  handleQuantity(val:any){
    if(this.productQuantity<20 && val==='plus'){
      this.productQuantity+=1;
    }else if(this.productQuantity>1 && val==='min'){
      this.productQuantity-=1;
    }
  }
  addToCart(){
    if(this.productData){
      this.productData.quantity= this.productQuantity
      if(!localStorage.getItem('user')){
        this.ps.localAddtocart(this.productData)
        this.removeCart=true
      }
      else{
        let user = localStorage.getItem('user');
       let userId= user && JSON.parse(user).id
       
        
        //console.log(User[0].id);
        
        let cartData:any={
          ...this.productData,
          productId:this.productData.id,
          userId,
          user
          
          
          
          
        }
      
        
        delete cartData.id;
        this.ps.addToCart(cartData).subscribe((result)=>{
          if(result){
          alert('sucess')
          }
        })        
      }
    }
  }
  removeToCart(productId:any){
 //   if(!localStorage.getItem('user')){
this.ps.removeItemFromCart(productId)
  //  }else{
   //   console.warn("cartData", this.cartData);
      
   //   this.cartData && this.product.removeToCart(this.cartData.id)
  //    .subscribe((result)=>{
   //     let user = localStorage.getItem('user');
   //     let userId= user && JSON.parse(user).id;
   //     this.product.getCartList(userId)
   //   })
   // }
    this.removeCart=false
  }
  
}
