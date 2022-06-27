import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-titem',
  templateUrl: './titem.component.html',
  styleUrls: ['./titem.component.css']
})
export class TitemComponent implements OnInit {
  @Input() task?: Task
  constructor() { }

  ngOnInit(): void {
  }

}
