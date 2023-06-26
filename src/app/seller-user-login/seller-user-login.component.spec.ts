import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerUserLoginComponent } from './seller-user-login.component';

describe('SellerUserLoginComponent', () => {
  let component: SellerUserLoginComponent;
  let fixture: ComponentFixture<SellerUserLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerUserLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerUserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
