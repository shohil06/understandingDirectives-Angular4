import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]'
})

export class basicHighlightDirective implements OnInit{
  constructor(private element: ElementRef) {

  }

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = 'green';
  }
}
