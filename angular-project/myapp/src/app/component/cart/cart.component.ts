import { Component } from '@angular/core';
import { foodData } from 'src/API/foodData';
import { Cart, CartItem } from 'src/app/Model/Cart';
import { CartService } from 'src/app/service/cart-service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cart!: Cart;
  constructor(private cartService: CartService) {
    this.setCart();
  }
  setCart() {
    this.cart = this.cartService.getCart();
  }
  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }
  changeQuantity(cartItem: CartItem, quantity: string) {
    const q = parseInt(quantity);
    this.cartService.changeQuantity(cartItem.food.id, q);
    this.setCart();
  }
  increaseQuantity(cartItem: CartItem) {
    this.cartService.incressQuantity(cartItem.food.id);
    this.setCart();
  }
  decreaseQuantity(cartItem: CartItem) {
    this.cartService.decressQuantity(cartItem.food.id);
    this.setCart();
  }
}
