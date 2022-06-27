import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProfileComponent } from './component/profile/profile.component';
import { FormsModule } from "@angular/forms";
import { UsersComponent } from './component/users/users.component';
import { HighlightDirective } from '../directives/highlight.directive';
import { PipesPipe } from './pipes/pipes.pipe';
import { JokeComponent } from './component/joke/joke.component';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    UsersComponent,
    HighlightDirective,
    PipesPipe,
    JokeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
