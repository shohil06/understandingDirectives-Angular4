import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector:'[unless_Structural_Directive]'
})
export class unlessStructuralDirective{

  constructor(private template: TemplateRef<any> , private viewContainerRef: ViewContainerRef){

  }

  // The property name should be same as the selector !
  @Input() set unless_Structural_Directive(condition: boolean){
    if(!condition){
      this.viewContainerRef.createEmbeddedView(this.template);
    }
    else {
      this.viewContainerRef.clear();
    }
  }
}
