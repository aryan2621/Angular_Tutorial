import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CustomstyleDirective } from './customstyle.directive';
// import { UsersModule }  from "./users/users.module"
import { AdminModule } from "./admin/admin.module"

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    PagenotfoundComponent,
    CustomstyleDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
