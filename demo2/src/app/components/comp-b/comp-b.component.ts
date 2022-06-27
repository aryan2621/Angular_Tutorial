import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CounterService } from 'src/services/counter.service';


interface User {
  id: number,
  name: string
}

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css'],
  providers: [CounterService]
})
export class CompBComponent implements OnInit {

  constructor(private counterService: CounterService,private router:Router) { }

  ngOnInit(): void {
  }
  users: User[] = [
    {
      id: 1, name: "Rishabh"
    },
    {
      id: 2, name: "Manisha"
    },
    {
      id: 3, name: "Akansha"
    }
  ]
  showCounter() {
    return this.counterService.getCnt();
  }
  Func(id:number){
    this.router.navigate(['user/',id]);
  }
  updateCounter() {
    return this.counterService.updateCnt();
  }
}
