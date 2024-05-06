import { Component, OnInit, ViewChild } from '@angular/core';
import { Router} from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import {MatSort} from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import {HttpClientModule} from "@angular/common/http";
import {OwnerEntity} from "../../model/owner.entity";
import {OwnerService} from "../../services/owner.service";

@Component({
  selector: 'app-add-food-truck',
  standalone: true,
  imports: [
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [OwnerService],
  templateUrl: './add-food-truck.component.html',
  styleUrl: './add-food-truck.component.css'
})
export class AddFoodTruckComponent implements OnInit{
  @ViewChild('ownerForm', { static: false }) ownerForm!: NgForm;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  ownerData!: OwnerEntity;
  dataSource = new MatTableDataSource();

  constructor(private foodTruckService: OwnerService, private router: Router){
    this.ownerData = {} as OwnerEntity;
  }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.getAll();
  }

  //Get all foodtrucks
  getAll(){
    this.foodTruckService.getList().subscribe((response: any) => {
      this.dataSource.data = response.sort((a: any, b: any) => b.id - a.id);
    });
  }

  //Cancel Add
  cancelAdd(){
    this.ownerForm.resetForm();
  }

  //Add new Food Truck
  addItem(){
    let maxID : number = 0;
    maxID = this.dataSource.data.reduce((max:number, owner:any) => owner.id > max ? owner.id : max, 0);
    this.ownerData.id = (Number(maxID) + 1).toString();
    console.log(maxID)

    this.foodTruckService.createItem(this.ownerData).subscribe((response: any) => {
      this.dataSource.data.unshift({...response});
      this.dataSource.data =[...this.dataSource.data];
    });
  }

  onSubmit(){
    if(this.ownerForm.form.valid){
      this.addItem();
      this.cancelAdd();
    } else {
      console.log('Invalid data');
    }
  }
}
