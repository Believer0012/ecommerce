import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  uid:any
  isUserLoggedIn= new BehaviorSubject<boolean>(true)
  isLoginError=new EventEmitter<boolean>(false)

  constructor(private http: HttpClient, private router:Router) { }

  userSignup(userData: any) {
    this.http.post('http://localhost:3000/user',userData,
      { observe: 'response' }).subscribe((result) => {
        this.isUserLoggedIn.next(true);
        if(result){

        
        localStorage.setItem('user',JSON.stringify(result.body));
        this.router.navigateByUrl('seller-home');
        }
      });


  
  }
  reloadSeller(){
    if(localStorage.getItem('user')){
      this.isUserLoggedIn.next(true)
      this.router.navigateByUrl('seller-home')
    }
  }

  userLogin(data:any){
    this.http.get(`http://localhost:3000/user?email=${data.email}&password=${data.password}`,
    {observe:'response'}).subscribe((result:any)=>{
    // console.log(result);
     if(result && result.body && result.body.length===1){
       this.isLoginError.emit(false)
       localStorage.setItem('user',JSON.stringify(result.body))
      console.log(result.body.user.id);
      
       
      localStorage.setItem('id',(result.body['id']))
       //console.log(result.body.id);

       this.router.navigate(['seller-home'])
     }else{
       console.warn("login failed");
       this.isLoginError.emit(true)
     }
    })
   }
  }
    
