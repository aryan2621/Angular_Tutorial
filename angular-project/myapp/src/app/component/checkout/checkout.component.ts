import { Component, Input } from '@angular/core';
import { Cart, CartItem } from 'src/app/Model/Cart';
import { CartService } from 'src/app/service/cart-service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  @Input() cartItem: CartItem[] = [];
  taxable = 0;
  total_amount = 0;
  total = 0;
  cart!: Cart;
  constructor(private cartService: CartService) {
    this.setCart();
  }
  setCart() {
    this.cart = this.cartService.getCart();
  }
  ngOnInit(): void {
    this.cart.items.forEach((item) => {
      this.total_amount += item.getPrice();
    });
    this.taxable = this.total_amount * 0.18;
    this.total = this.total_amount + this.taxable;
  }
}
