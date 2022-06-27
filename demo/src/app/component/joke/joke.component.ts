import { Component, OnInit } from '@angular/core';
import { JokeService } from 'src/app/services/joke.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  constructor(private jokeservice: JokeService) { }
  joke: string = "Loading Joke..."
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.jokeservice.getJoke().subscribe((data: any) => {
      this.joke = data.value;
    })
  }
}
