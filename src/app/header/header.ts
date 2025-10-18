import { Component } from '@angular/core';
import { TopMenu } from "./top-menu/top-menu";
import { AuthMenu } from "./auth-menu/auth-menu";

@Component({
  selector: 'app-header',
  imports: [TopMenu, AuthMenu],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
