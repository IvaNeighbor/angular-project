import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <div class="auth-container">
      <h2>Login</h2>
      <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label>Email</label>
          <input type="email" formControlName="email" placeholder="email@example.com">
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" formControlName="password">
        </div>
        <button type="submit" [disabled]="loginForm.invalid">Sign In</button>
      </form>
      <p>No account? <a routerLink="/register">Register</a></p>
    </div>
  `,
  styles: [`
    .auth-container { max-width: 400px; margin: 50px auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; }
    .form-group { margin-bottom: 15px; }
    input { width: 100%; padding: 8px; margin-top: 5px; }
    button { width: 100%; padding: 10px; background: #ff7b54; color: white; border: none; cursor: pointer; }
    button:disabled { background: #ccc; }
  `]
})
export class Login {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  
  loginForm: FormGroup;

  constructor() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.register(this.loginForm.value).subscribe({
        error: (err) => alert('Register failed!')
      });
    }
  }
}