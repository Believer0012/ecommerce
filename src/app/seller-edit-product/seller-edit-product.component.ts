import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-edit-product',
  templateUrl: './seller-edit-product.component.html',
  styleUrls: ['./seller-edit-product.component.css']
})
export class SellerEditProductComponent {
  pid:any
  pData:any
  constructor(private ar:ActivatedRoute,private ps:ProductService,private router:Router){}
  ngOnInit():void{
  this.ar.params.subscribe((data:any)=>{
    this.pid=data["id"]
  })
  this.ps.viewProduct(this.pid).subscribe((data:any)=>{
  this.pData=data
   
  
  
  })
  }
  updateProduct(form:any){
    console.log(this.pData);
  this.ps.UpdateProduct(this.pid,this.pData).subscribe((item:any)=>{
    alert("updated")
    this.router.navigateByUrl('edit_product'+this.pid)
  })

  }
}
