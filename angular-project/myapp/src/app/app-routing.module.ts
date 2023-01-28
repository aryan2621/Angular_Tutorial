import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { FoodDetailComponent } from './component/food-detail/food-detail.component';
import { CartComponent } from './component/cart/cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:search', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  { path: 'food/:id', component: FoodDetailComponent },
  { path: 'cart-page', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
