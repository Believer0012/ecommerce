import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-seller-add-product-list',
  templateUrl: './seller-add-product-list.component.html',
  styleUrls: ['./seller-add-product-list.component.css']
})
export class SellerAddProductListComponent {

  productList: any
  filterProduts: any
  searchKey: any = ""

  constructor(private ps: ProductService) { }

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
  

