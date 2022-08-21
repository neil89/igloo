import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FoodStuffExpirationType, FoodStuffGroup, FoodStuffUnitsOfMeasure } from '../pipes/foodStuff.pipe';
import { SharedModule } from '../shared/shared.module';
import { FridgeRoutingModule } from './fridge-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FridgeComponent } from './fridge.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    IonicModule.forRoot(),
    HttpClientModule,
    FridgeRoutingModule
  ],
  declarations: [
    FridgeComponent,
    FoodStuffUnitsOfMeasure,
    FoodStuffGroup,
    FoodStuffExpirationType
  ],
  providers: [
    HttpClientModule
  ]
})
export class FridgeModule { }
