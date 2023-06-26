import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {
  constructor(private fb:FormBuilder, private ps:ProductService,private router:Router){}
  ngOnInit():void{}
  //model form 
  addProductForm = this.fb.group({
    id:[""],
    productName:[""],
    categoryId:[""],
    description:[""],
    price:[""],
    isAvailiable:[""],
    productImage:[""],
    rating:[""],
    review:[""],
    vendorName:[""],
    warrenty:[""]
  })
  addProduct(){
    let pData={
    id:this.addProductForm.value.id,
    productName:this.addProductForm.value.productName,
    categoryId:this.addProductForm.value.categoryId,
    description:this.addProductForm.value.description,
    price:this.addProductForm.value.price,
    isAvailiable:this.addProductForm.value.isAvailiable,
    productImage:this.addProductForm.value.productImage,
    rating:this.addProductForm.value.rating,
    review:this.addProductForm.value.review,
    vendorName:this.addProductForm.value.vendorName,
    warrenty:this.addProductForm.value.warrenty
  }
  this.ps.addNewProduct(pData).subscribe((item:any)=>{
    alert('"new product added')
    this.router.navigateByUrl('')
    
  })
}
}
