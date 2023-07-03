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
        let User = localStorage.getItem('user');
        let user = User && JSON.parse(User)
        if(user){
        let userid=user[0].id
        this.ps.getCartList(userid)
        this.ps.cartData.subscribe((result)=>{
         let item = result.filter((item:any)=>this.proId?.toString()===item.productId?.toString())
         if(item.length){
          this.cartData=item[0];
          this.removeCart=true
         }else{
          this.removeCart=false
        }

        })
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
        let User = localStorage.getItem('user');
        let user = User && JSON.parse(User)
       // let userId= User && JSON.parse(User).id;
       let userid=user[0].id
        let cartData:any={
          ...this.productData,
          productId:this.productData.id,
          userid
          
        }

        //console.log("user:" ,user,User);
       // console.log(userid);
        
        

      
        
        delete cartData.id;
        this.ps.addToCart(cartData).subscribe((result)=>{
          if(result){
          this.productData.getCartList(userid)
          this.removeCart=true
          }
        })        
      }
    }
  }
  removeToCart(productId:any){
   if(!localStorage.getItem('user')){
this.ps.removeItemFromCart(productId)
    }else{
    console.warn("cartData", this.cartData);
      
   this.cartData && this.ps.removeToCart(this.cartData.id)
      .subscribe((result)=>{
        let User = localStorage.getItem('user');
        let user = User && JSON.parse(User)
       let userid=user[0].id
        this.ps.getCartList(userid)
      })
      
    this.removeCart=false
    }
    
  }
  
  }

