import { Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding } from '@angular/core';

@Directive({
  selector: '[betterHighlight]'
})

export class BetterHighlightDirective implements OnInit{
  constructor(private elRef: ElementRef, private renderer: Renderer2){

  }


// Method 1 using ngOnInit
  ngOnInit(){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

// Method 2 using HostListener
  // @HostListener('mouseenter') mouseover(eventData: Event){
  //   this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  // }
  // @HostListener('mouseleave') mouseleave(eventData: Event){
  //   this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  // }

// Method 3 using HostBinding
  // Initial value is required for the HostBinding property parameter to prevent an error thrown in the first initialization
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  @HostListener('mouseenter') mouseover(eventData: Event){
    this.backgroundColor = 'blue';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.backgroundColor = 'transparent';
  }



}
