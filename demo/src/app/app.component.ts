import { Component } from "@angular/core";
import { User } from "src/Model/user";


@Component({
  templateUrl: "./app.component.html",
  selector: "app-root",
  styleUrls: ["./app.component.css"]
})

export class AppComponent {
  constructor() {

  }
  phone_no: string = "6387646098";
  show: boolean = true;
  title?: string = "Rishabh Car";
  users: User[] = [
    { name: "Rishabh Verma", age: 20, salery: 2000, status: "Marraige", imgs: "./assets/1.png" },
    { name: "Manisha Verma", age: 20, salery: 5000, status: "Marraige", imgs: "./assets/2.png" },
    { name: "Akansha Verma", age: 40, salery: 2000, status: "Marraige", imgs: "./assets/3.jpg" },
    { name: "Sharath Verma", age: 20, salery: 2000, status: "Bachelor", imgs: "./assets/3.jpg" },
  ]
  receivedData(value: any) {
    console.log(value)
  }
}