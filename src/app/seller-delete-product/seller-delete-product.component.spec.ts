import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerDeleteProductComponent } from './seller-delete-product.component';

describe('SellerDeleteProductComponent', () => {
  let component: SellerDeleteProductComponent;
  let fixture: ComponentFixture<SellerDeleteProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerDeleteProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerDeleteProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
