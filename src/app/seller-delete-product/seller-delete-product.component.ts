import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-delete-product',
  templateUrl: './seller-delete-product.component.html',
  styleUrls: ['./seller-delete-product.component.css']
})
export class SellerDeleteProductComponent {
  pid:any
  constructor(private ar:ActivatedRoute , private ps:ProductService, private router:Router) {}
  ngOnInit():void{ this.ar.params.subscribe((data:any)=>{
    this.pid=data["id"]
  })
this.ps.Deleteproduct(this.pid).subscribe((item:any)=>{
  alert("produt deleted")
  this.router.navigateByUrl("products")
})
  }
}
