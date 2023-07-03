import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-user-login',
  templateUrl: './seller-user-login.component.html',
  styleUrls: ['./seller-user-login.component.css']
})
export class SellerUserLoginComponent {
  
  constructor(private user:UserService,private fb:FormBuilder,private router:Router,private ps:ProductService){}
  shownLogin:boolean=true
  authError:string=""
    ngOnInit():void{
      this.user.reloadSeller
    }
  
    addUserForm = this.fb.group({
    
      name:[""],
      email:[""],
      password:[""]
    })
    addUser(){
      let uData={
      name:this.addUserForm.value.name,
      email:this.addUserForm.value.email,
      password:this.addUserForm.value.password  
      } 
      this.user.userSignup(uData)
    
  }
  addLoginForm = this.fb.group({
    
  
    email:[""],
    password:[""]
  })
   
  Login() {
    let lData={
      email:this.addLoginForm.value.email,
      password:this.addLoginForm.value.password 
    }
  
    this.user.userLogin(lData);
    this.router.navigateByUrl('user-home')
    this.user.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError="Email or password is not correct";
      }else{
      
        setTimeout(() => {
          this.localCartToRemoteCart();
        
     
        }, 300)   }
      
    })
  } openLogin(){
    this.shownLogin=true
  }
  openSignup(){
    this.shownLogin=false
  }
 
 
  localCartToRemoteCart(){
    let data = localStorage.getItem('localcart');
    let User = localStorage.getItem('user');
    let user = User && JSON.parse(User) 

    let userid=user[0].id
        
    if(data){
     let cartDataList:any[]= JSON.parse(data);
   
     cartDataList.forEach((product:any,index)=>{
       let cartData:any={
         ...product,
         productId:product.id,
         userid
        
         
        
         
         
       }
       console.log(user);

      // console.log(User["id"]);
      // console.log(userid);
       
       
       
       
       
       
       delete cartData.id;
       setTimeout(() => {
         this.ps.addToCart(cartData).subscribe((result)=>{
           if(result){
             console.warn("data is stored in DB");
           }
         })
       }, 500);
       if(cartDataList.length===index+1){
         localStorage.removeItem('localcart')
       }
     })
    }
    setTimeout(()=>{
      this.ps.getCartList(userid)
    },2000);
 
  
     
   }
  }
  
  
  
  

