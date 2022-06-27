import {
  Component, Input, OnInit, Output,
  EventEmitter, OnChanges, SimpleChanges, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnChanges {
  @Input() name?: string;
  @Input() age?: number;
  @Input() status?: string;
  @Input() salery?: number;
  @Input() imgs?: any;


  @Output() myEvent = new EventEmitter<string>();
  passData(value: any) {
    this.myEvent.emit(value);
  }
  text: string;
  constructor() {
    this.text = "age";
    console.log("constructor")
    // initialise the values require by class
  }

  ngOnInit() {
    console.log("OnInit")
    // initialise the values require by the component
    // eventlistener register
    // initial data fetch
  }
  ngOnChanges(value: SimpleChanges) {
    // whenever any @Input OnChanges it get called
    console.log("OnChanges", value)
  }
  ngOnDestroy() {
    console.log("DESTROYED")
  }
}
