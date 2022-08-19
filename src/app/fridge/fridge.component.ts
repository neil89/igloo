import { Component, OnInit } from '@angular/core';
import { FoodStuff } from '../models/food';

@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.scss'],
})
export class FridgeComponent implements OnInit {

  public items: FoodStuff[] = [];

  constructor() { }

  public ngOnInit(): void {
    this.getItems();
  }

  private getItems() {
    const peppers: FoodStuff = {
      id: '1',
      amount: 2,
      units: 'units',
      name: 'Pimientos',
      group: 'Vegetables',
      expirationType: 'Short-lasting'
    };

    this.items.push(peppers);
  }

}
