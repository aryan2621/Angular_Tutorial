import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  getUserValue(value: any) {
    console.log(value);
  }
  title = "blgg";
  address="123 /A Preetam nagar Allahabad"
  user = [
    {
      name: "rishabh",
      age: 23,
      address: "allahabad"
    },
    {
      name: "rishabh",
      age: 23,
      address: "allahabad"
    },
    {
      name: "rishabh",
      age: 23,
      address: "allahabad"
    }
  ]

  parentComponent(data) {
    console.log(data);
  }
}
