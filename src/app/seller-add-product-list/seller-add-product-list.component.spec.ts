import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerAddProductListComponent } from './seller-add-product-list.component';

describe('SellerAddProductListComponent', () => {
  let component: SellerAddProductListComponent;
  let fixture: ComponentFixture<SellerAddProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerAddProductListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerAddProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
