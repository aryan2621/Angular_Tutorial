import { Component } from '@angular/core';
import { FoodTag, foodTags } from 'src/API/foodData';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css'],
})
export class TagComponent {
  tags: FoodTag[] = [];
  classList: string[] = [
    'btn btn-primary',
    'btn btn-secondary',
    'btn btn-success',
    'btn btn-danger',
    'btn btn-warning',
    'btn btn-info',
    'btn btn-light',
  ];
  constructor(private r: Router) {
    this.tags = foodTags;
  }
  moveToTag(tag: string) {
    this.r.navigate(['tag', tag]);
  }
}
