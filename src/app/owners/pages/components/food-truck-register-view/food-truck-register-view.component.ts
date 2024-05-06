import { Component } from '@angular/core';
import {AddFoodTruckComponent} from "../../../components/add-food-truck/add-food-truck.component";

@Component({
  selector: 'app-food-truck-register-view',
  standalone: true,
  imports: [
    AddFoodTruckComponent
  ],
  templateUrl: './food-truck-register-view.component.html',
  styleUrl: './food-truck-register-view.component.css'
})
export class FoodTruckRegisterViewComponent {

}
