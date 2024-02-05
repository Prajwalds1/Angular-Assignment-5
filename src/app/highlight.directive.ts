import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
@Input() count:any="0";

  constructor(private ele:ElementRef) { 
    // this.ele.nativeElement.style.fontSize="";
  }
  highlight(count:any ) {
    console.log('Counter value:', count);
  }
  @HostListener('click') onMouseClick(){
    this.highlight(this.count++);
  }

  

}
