import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodTruckRegisterViewComponent } from './food-truck-register-view.component';

describe('FoodTruckRegisterViewComponent', () => {
  let component: FoodTruckRegisterViewComponent;
  let fixture: ComponentFixture<FoodTruckRegisterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodTruckRegisterViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodTruckRegisterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
