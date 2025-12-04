import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-auth-menu',
  imports: [CommonModule, RouterLink],
  templateUrl: './auth-menu.html',
  styleUrl: './auth-menu.scss'
})
export class AuthMenu implements OnInit {
  isAuthenticated$!: Observable<boolean>;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isAuthenticated$ = this.authService.isAuthenticated$;
  }

  logout(event: Event) {
    event.preventDefault();
    this.authService.logout();
  }
}
