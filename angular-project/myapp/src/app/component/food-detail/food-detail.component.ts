import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/service/cart-service';
import { FoodService } from 'src/app/service/food.service';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css'],
})
export class FoodDetailComponent {
  food: any;
  classList: string[] = [
    'btn btn-primary',
    'btn btn-secondary',
    'btn btn-success',
    'btn btn-danger',
    'btn btn-warning',
    'btn btn-info',
    'btn btn-light',
  ];
  constructor(
    private rr: Router,
    private r: ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService
  ) {
    this.r.params.subscribe((params) => {
      if (params['id']) {
        let foodId = parseInt(params['id']);
        this.food = this.foodService.getFoodById(foodId);
      }
    });
  }
  moveToTag(tag: string) {
    this.rr.navigate(['tag', tag]);
  }
  addToCarts() {
    this.cartService.addToCart(this.food);
    this.rr.navigateByUrl('cart-page');
  }
}
