import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Data } from '../../services/data';

@Component({
  selector: 'app-create-offer',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-offer.html',
  styleUrl: './create-offer.scss'
})
export class CreateOffer {
  offerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dataService: Data,
    private router: Router
  ) {
    this.offerForm = this.fb.group({
      country: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      price: [null, [Validators.required, Validators.min(1)]],
      discount: [null, [Validators.min(0), Validators.max(99)]],
      bgImage: ['', Validators.required],
      freeSeats: [null, [Validators.required, Validators.min(0)]],
      rating: [5, [Validators.required, Validators.min(1), Validators.max(5)]]
    });
  }

  onSubmit() {
    if (this.offerForm.valid) {
      this.dataService.addOffer(this.offerForm.value).subscribe({
        next: (response) => {
          console.log('Offer added:', response);
          this.offerForm.reset();
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('Error adding offer', err);
        }
      });
    } else {
      this.offerForm.markAllAsTouched();
    }
  }
}
