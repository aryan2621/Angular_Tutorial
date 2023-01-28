import { Injectable } from '@angular/core';
import { foodData } from 'src/API/foodData';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}
  getFoodData() {
    return foodData;
  }
  getFoodByTagName(tagName: string) {
    if (tagName === 'all') {
      return foodData;
    } else {
      return foodData.filter((food) => food.tags?.includes(tagName));
    }
  }
  getFoodById(id: number) {
    return foodData.find((food) => food.id === id);
  }
}
