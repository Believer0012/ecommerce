import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
  constructor(private seller:SellerService,private fb:FormBuilder,private router:Router){}
shownLogin=false
authError:string=""
  ngOnInit():void{
    this.seller.reloadSeller
  }

  addSellerForm = this.fb.group({
  
    name:[""],
    email:[""],
    password:[""]
  })
  addseller(){
    let sData={
    name:this.addSellerForm.value.name,
    email:this.addSellerForm.value.email,
    password:this.addSellerForm.value.password  
    } 
    this.seller.userSignup(sData)
  
}
openLogin(){
  this.shownLogin=true
}
openSignup(){
  this.shownLogin=false
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

  this.seller.userLogin(lData);
  this.seller.isLoginError.subscribe((isError)=>{
    if(isError){
      this.authError="Email or password is not correct";
    }
  })
}
}



