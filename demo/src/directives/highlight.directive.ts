import { Directive, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  /*
  chahe to yaha pe variable banake constructor me pass karke usko 
  as this.el = el karro or fir oninit me chnage karro
  ye kewal constructor me prvte el:ElementRef karke use karlo
  constructor injection kehte hai is method ko 
  */

  @HostBinding('style.backgroundColor') bgColor: any;

  ngOnInit() {
    // this.el.nativeElement.style.backgroundColor = "green";
    this.bgColor = "#fbab60";
  }
  @HostListener('mouseenter') onEnter() {
    this.bgColor = "#e3ab57";
  }

  @HostListener('mouseleave') onLeave() {
    this.bgColor = "#fbab60";
  }

  constructor(private el: ElementRef) {
  }
}
