import { Pipe, PipeTransform } from '@angular/core';
import { UnitsOfMeasure } from '../models/food';

@Pipe({ name: 'foodStuffUnitsOfMeasure' })

export class FoodStuffUnitsOfMeasure implements PipeTransform {
  transform(value: UnitsOfMeasure, amount: number ): string {
    let foodStuffAmount = `${amount}`;
    switch(value) {
      case 'kg':
      case 'g':
        const measure = amount === 1 ? value : `${value}s`;
        foodStuffAmount += ` ${measure}`;
        break;
    }

    return foodStuffAmount;
  }
}
