import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {  
  menuType:string='Default'
  sellerName:string=''
  userName:string=''
  searchTerm:any
  cartItems=0
  constructor(private route: Router,private ps:ProductService) {}
  ngOnInit(): void {
    this.route.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('seller')&& val.url.includes('seller')){
          let sellerStore = localStorage.getItem('seller')
          let sellerData= sellerStore && JSON.parse(sellerStore)[0]
          this.sellerName=sellerData.name
        
          
          this.menuType='seller'
        }


        else {
        if(localStorage.getItem('user')){
          let userStore=localStorage.getItem('user')
          let userData = userStore&&JSON.parse(userStore);
          this.userName=userData.name
          this.menuType='user'
          this.ps.getCartList(userData[0].id);
        }
      }

        }
         
        })
        
     
        let cartData= localStorage.getItem('localCart');
        if(cartData){
          this.cartItems= JSON.parse(cartData).length
        }
        this.ps.cartData.subscribe((items)=>{
          this.cartItems= items.length
        })
      }
      
      
      logout(){
        localStorage.removeItem('seller')
        this.route.navigateByUrl('')
      }
      
        userLogout(){
          localStorage.removeItem('user');
          this.route.navigateByUrl("")
          this.ps.cartData.emit([])
      }
      search(event:any){
        this.searchTerm=event.target.value
        //send the data to behaviour subject
        this.ps.search.next(this.searchTerm)
      }

      }
    
  


