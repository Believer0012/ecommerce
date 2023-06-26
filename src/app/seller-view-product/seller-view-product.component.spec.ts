import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerViewProductComponent } from './seller-view-product.component';

describe('SellerViewProductComponent', () => {
  let component: SellerViewProductComponent;
  let fixture: ComponentFixture<SellerViewProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerViewProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerViewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
