import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from "./admin/admin.component";
import { UserComponent } from "./user/user.component"
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component"
import { LoginComponent } from "./users/login/login.component"
import { SignupComponent } from "./users/signup/signup.component"


const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  }, {
    path: "signup",
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
