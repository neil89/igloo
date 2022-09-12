import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { FridgeRoutingModule } from './fridge-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FridgeComponent } from './fridge.component';
import { FoodStuffExpirationType, FoodStuffGroup, FoodStuffUnitsOfMeasure } from '../pipes/foodStuff.pipe';

const pipes = [
  FoodStuffUnitsOfMeasure,
  FoodStuffGroup,
  FoodStuffExpirationType
];

@NgModule({
  declarations: [
    FridgeComponent,
    ... pipes
  ],
  imports: [
    IonicModule.forRoot(),
    SharedModule,
    FridgeRoutingModule
  ],
  providers: [
    HttpClientModule
  ]
})
export class FridgeModule { }
