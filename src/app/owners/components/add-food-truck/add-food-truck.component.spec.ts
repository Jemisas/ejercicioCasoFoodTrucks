import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddFoodTruckComponent } from './add-food-truck.component';

describe('AddFoodTruckComponent', () => {
  let component: AddFoodTruckComponent;
  let fixture: ComponentFixture<AddFoodTruckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFoodTruckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFoodTruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
