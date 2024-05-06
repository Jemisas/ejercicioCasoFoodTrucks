import { Component, OnInit } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { CommonModule} from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import {OwnerService} from "../../../owners/services/owner.service";
import {OwnerEntity} from "../../../owners/model/owner.entity";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule,
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [OwnerService],
})
export class HomeComponent implements OnInit {
  owners: OwnerEntity[] = [];
  Count: number = 0;
  constructor(private http: HttpClientModule, private ownerService: OwnerService){}
  ngOnInit(): void {
    this.getAllFoodTrucks();
  }
  getAllFoodTrucks(): void {
    this.ownerService.getList().subscribe(
      (owners:OwnerEntity[] | OwnerEntity) => {
        if(Array.isArray(owners)){
          this.owners = owners;
          this.Count = this.countMethod(owners);
        } else {
          this.owners = [owners];
          this.Count = 1;
        }
      },
      error => {
        console.log('Something went wrong', error);
      }
    );
  }

  countMethod(foodtrucks:OwnerEntity[]): number {
    const ids = new Set(foodtrucks.map(owners => owners.id));
    return ids.size;
  }
}
