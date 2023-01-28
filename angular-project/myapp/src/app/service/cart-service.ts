import { Injectable } from '@angular/core';
import { Cart, CartItem } from '../Model/Cart';
import { Food } from 'src/API/foodData';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = new Cart();
  constructor() { }
  addToCart(food: Food) {
    let item = this.cart.items.find((item) => item.food.id === food.id);
    if (item) {
      this.changeQuantity(food.id, item.quantity + 1);
    } else {
      this.cart.items.push(new CartItem(food, 1));
    }
  }
  removeFromCart(foodId: number) {
    this.cart.items = this.cart.items.filter((item) => item.food.id !== foodId);
  }
  changeQuantity(foodId: number, quantity: number) {
    let cartItem = this.cart.items.find((item) => item.food.id === foodId);
    if (cartItem) {
      cartItem.quantity = quantity;
    }
  }
  incressQuantity(foodId: number) {
    let cartItem = this.cart.items.find((item) => item.food.id === foodId);
    if (cartItem) {
      cartItem.quantity++;
    }
  }
  decressQuantity(foodId: number) {
    let cartItem = this.cart.items.find((item) => item.food.id === foodId);
    if (cartItem) {
      cartItem.quantity--;
    }
    if (cartItem?.quantity == 0) {
      this.removeFromCart(foodId);
    }
  }
  getCart(): Cart {
    return this.cart;
  }
}
