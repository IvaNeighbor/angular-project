import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TopMenu } from "./top-menu/top-menu";
import { AuthMenu } from "./auth-menu/auth-menu";

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, TopMenu, AuthMenu, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
}
