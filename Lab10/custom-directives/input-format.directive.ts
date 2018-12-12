
import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[customInputFormat]'
})
export class InputFormatDirective {
  constructor(private el: ElementRef) { }

  @HostListener('focus')   onFocus() {
    console.log('on Focus');

    let value: string = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toUpperCase();
  }
  
  @HostListener('blur') onBlur() {
    console.log('on Blur');

    let value: string = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toLowerCase();

  }


  


}
