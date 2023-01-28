import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { SearchComponent } from './component/search/search.component';
import { FormsModule } from '@angular/forms';
import { TagComponent } from './component/tag/tag.component';
import { CartComponent } from './component/cart/cart.component';
import { FoodDetailComponent } from './component/food-detail/food-detail.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagComponent,
    CartComponent,
    FoodDetailComponent,
    CheckoutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
