import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private cnt: number = 0
  constructor() { }
  getCnt() {
    return this.cnt;
  }
  updateCnt() {
    this.cnt = this.cnt + 1;
  }
}
