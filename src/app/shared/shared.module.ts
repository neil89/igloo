import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FridgeComponent } from '../fridge/fridge.component';
import { FoodStuffExpirationType, FoodStuffGroup, FoodStuffUnitsOfMeasure } from '../pipes/foodStuff.pipe';


const components = [];

const modules = [
  CommonModule,
  RouterModule,
  HttpClientModule
];

@NgModule({
  declarations: [
  ],
  imports: [
    ... modules
  ],
  exports: [
    ... modules
  ]
})
export class SharedModule { }
