import { Food } from 'src/API/foodData';

export class CartItem {
  food: Food;
  quantity: number;
  constructor(food: Food, quantity: number) {
    this.food = food;
    this.quantity = quantity;
  }
  getPrice(): number {
    return this.food.price * this.quantity;
  }
}

export class Cart {
  items: CartItem[]=[];
  getTotalPrice(): number {
    let total = 0;
    for (let item of this.items) {
      total += item.getPrice();
    }
    return total;
  }
}
