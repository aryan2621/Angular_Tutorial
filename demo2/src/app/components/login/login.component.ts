import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  email: any = new FormControl("",
    [Validators.required, Validators.email])

  password: any = new FormControl("",
    [Validators.minLength(4), Validators.required])

  Submit() {
    console.log(this.LoginForm.value)
  }

  LoginForm = this.fb.group({
    email: this.email,
    password: this.password
  })
}
