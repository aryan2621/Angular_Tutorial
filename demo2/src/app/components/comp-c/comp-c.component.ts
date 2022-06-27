import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CounterService } from 'src/services/counter.service';

@Component({
  selector: 'app-comp-c',
  templateUrl: './comp-c.component.html',
  styleUrls: ['./comp-c.component.css'],
  providers: [CounterService]

})
export class CompCComponent implements OnInit {

  constructor(private counterService: CounterService, private route: ActivatedRoute) {

  }

  userID?: string | null;

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.userID = param.get('id');
    })
  }
  showCounter() {
    return this.counterService.getCnt();
  }
  updateCounter() {
    return this.counterService.updateCnt();
  }
}
