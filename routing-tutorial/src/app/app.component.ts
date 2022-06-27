import { Component } from '@angular/core';
import { UserDataService } from './user-data.service';
import { UserServiceService } from './user-service.service';

interface dataType {
  name: string,
  id: number,
  indian: boolean,
  address: any,
  age: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'routing-tutorial';
  data: any = [];
  constructor(private user: UserServiceService) {
    this.user.getData().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }
  getData() {
    const data: dataType = {
      name: 'Rishabh Verma',
      age: 90,
      id: 20,
      address: 90,
      indian: true
    };
    return data;
  }
}
