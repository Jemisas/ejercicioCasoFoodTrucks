import { Routes } from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {
  FoodTruckRegisterViewComponent
} from "./owners/pages/components/food-truck-register-view/food-truck-register-view.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'owners/food-trucks/new', component: FoodTruckRegisterViewComponent},
  { path: '**', component: PageNotFoundComponent }
];
