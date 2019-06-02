import { Directive,ElementRef, Input, OnInit} from '@angular/core';
import { Quote } from './quote';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input('appHighlight') highlight: boolean;
  private defaultColor;

  constructor(private elem:ElementRef) { 
    this.defaultColor =  this.elem.nativeElement.style.backgroundColor;
   }

   ngOnInit(): void {
    this.elem.nativeElement.style.backgroundColor= this.highlight === true ? 'yellow' : this.defaultColor;
  }
}
