import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FoodStuffUnitsOfMeasure } from '../pipes/foodStuff.pipe';
import { SharedModule } from '../shared/shared.module';
import { FridgeRoutingModule } from './fridge-routing.module';
import { FridgeComponent } from './fridge.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FridgeRoutingModule
  ],
  declarations: [
    FridgeComponent,
    FoodStuffUnitsOfMeasure
  ]
})
export class FridgeModule { }
