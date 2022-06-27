import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  Submit(reqForm: NgForm) {
    console.log(reqForm.value);
    this.route.navigate(['/login'])
  }
}
