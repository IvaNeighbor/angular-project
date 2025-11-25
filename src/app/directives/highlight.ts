import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class Highlight {

  @HostBinding('style.transform') transform: string = '';
  @HostBinding('style.transition') transition: string = 'transform 0.3s ease';
  @HostBinding('style.boxShadow') boxShadow: string = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.transform = 'scale(1.03)';
    this.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.transform = 'scale(1)';
    this.boxShadow = '';
  }

}
