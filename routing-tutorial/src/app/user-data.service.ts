import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  getData() {
    return {
      name: "Rishabh Verma",
      age: 30,
      id: 1
    }
  }
}
