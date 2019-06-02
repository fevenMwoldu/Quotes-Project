import { Directive,ElementRef} from '@angular/core';
import { Quote } from './quote';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) {


    this.elem.nativeElement.style.textDecoration='line-through';
   }

}
