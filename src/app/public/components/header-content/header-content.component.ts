import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {RouterLink} from "@angular/router";
import {MatAnchor} from "@angular/material/button";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-header-content',
  standalone: true,
  imports: [
    MatToolbar,
    RouterLink,
    MatAnchor,
    NgForOf
  ],
  templateUrl: './header-content.component.html',
  styleUrl: './header-content.component.css'
})
export class HeaderContentComponent {
  title = 'Food Truck Lovers';
  options = [
    { path: '/home', title: 'Home'},
    { path: 'owners/food-trucks/new', title: 'Register Food Truck'},
  ]
}
