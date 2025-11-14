import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TopMenu } from "./top-menu/top-menu";
import { AuthMenu } from "./auth-menu/auth-menu";

@Component({
  selector: 'app-header',
  imports: [TopMenu, AuthMenu, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
}
