import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn= new BehaviorSubject<boolean>(true)
  isLoginError=new EventEmitter<boolean>(false)

  constructor(private http: HttpClient, private router:Router) { }
 
 
 
  userSignup(sellerData: any) {
    this.http.post('http://localhost:3000/seller', sellerData,
      { observe: 'response' }).subscribe((result) => {
        this.isSellerLoggedIn.next(true);
        if(result){

        
        localStorage.setItem('seller',JSON.stringify(result.body));
        this.router.navigateByUrl('seller-home');
        }
      });


  
  }
  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true)
      this.router.navigateByUrl('seller-home')
    }
  }

  userLogin(data:any){
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
    {observe:'response'}).subscribe((result:any)=>{
     console.warn(result)
     if(result && result.body && result.body.length===1){
       this.isLoginError.emit(false)
       localStorage.setItem('seller',JSON.stringify(result.body))
       this.router.navigate(['seller-home'])
     }else{
       console.warn("login failed");
       this.isLoginError.emit(true)
     }
    })
   }
  }
    
