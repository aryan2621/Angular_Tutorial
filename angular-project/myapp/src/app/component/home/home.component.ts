import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/API/foodData';
import { FoodService } from 'src/app/service/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  FoodData: Food[] = [];
  constructor(private foodService: FoodService, private r: ActivatedRoute,private router:Router) {
    this.FoodData = this.foodService.getFoodData();
  }
  ngOnInit() {
    this.r.params.subscribe((params) => {
      if (params['search']) {
        this.FoodData = this.FoodData.filter((food) => {
          return food.name
            .toLowerCase()
            .includes(params['search'].toLowerCase());
        });
      } else if (params['tag']) {
        this.FoodData = this.foodService.getFoodByTagName(params['tag']);
      }
    });
  }
  movetoDetailPage(id: number) {
    this.router.navigate(['food',id]);
  }
}
