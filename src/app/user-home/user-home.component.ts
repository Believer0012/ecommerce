import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {
  productList: any
  filterProduts: any
  searchKey: any = ""
  constructor(private ps: ProductService,private router:Router) { }

  ngOnInit(): void {
    
    this.ps.viewAllProduct().subscribe(data => {
      console.log(data);
      this.productList = data


      this.ps.search.subscribe((value: any) => {
        this.searchKey = value
      })
    })
  }
  filter(category: any) {

    this.filterProduts = this.productList.filter((item: any) => item.categoryId == category || category == "")

  }
}
  



