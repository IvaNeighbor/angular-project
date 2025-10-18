import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  imports: [],
  templateUrl: './top-menu.html',
  styleUrl: './top-menu.scss'
})
export class TopMenu {
  @Input() theme: 'header' | 'footer' = 'header';
  
  @HostBinding('class') get themeClass() {
    return `theme-${this.theme}`;
}
}
