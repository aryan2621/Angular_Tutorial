import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  name: string = 'Rishabh Verma';
  age: number = 20;
  status: string = 'Coder';
  salary: number = 200;
  f: boolean = true;
  ngOnInit(): void { }
  getName() {
    return 'I am a Batman';
  }
  inputValue: string = "Rishabh Verma"
  isDisable: boolean = true;
  btnColor?: string;
  constructor() {
    const colors = [
      'btn btn-primary',
      'btn btn-success',
      'btn btn-danger',
      'btn btn-warning',
      'btn btn-gery',
    ];
    this.btnColor = colors[Math.floor(Math.random() * colors.length)];
    setTimeout(() => {
      this.isDisable = false;
    }, 3000);
  }
  ConvertToINR() {
    alert(this.salary * 70);
  }
  getInputValue(event: any) {
    this.inputValue = (event.target.value)
  }
  fruits: string[] = ["banana", "mango", "papaya", "leechi"];
  myDate!: Number;
}
