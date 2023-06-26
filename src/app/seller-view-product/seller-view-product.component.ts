import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller-view-product',
  templateUrl: './seller-view-product.component.html',
  styleUrls: ['./seller-view-product.component.css']
})
export class SellerViewProductComponent {
  proId:any
  productData:any
  constructor(private ps:ProductService,private ar:ActivatedRoute){}
  ngOnInit(){
    this.ar.params.subscribe((data)=>{

      this.proId=data['id']
      //console.log(this.proId);
      this.ps.viewProduct(this.proId).subscribe((data:any)=>{
        this.productData=data
        
      })
    })
  }
}
