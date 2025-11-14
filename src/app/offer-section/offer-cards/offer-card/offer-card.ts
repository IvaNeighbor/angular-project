import { Component, Input } from '@angular/core';
import { offer } from '../../../model/offer.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-offer-card',
  imports: [CommonModule],
  templateUrl: './offer-card.html',
  styleUrl: './offer-card.scss'
})
export class OfferCard {
  numberOfReserves: number = 0;
  stars = Array.from({ length: 5 });
  
  @Input() offer!: offer;
  
  getDiscountPrice() {
    if (this.offer.discount) {
       return this.offer.price - this.offer.price * this.offer.discount / 100; 
    }
    else {
      return this.offer.price;
    }
  }

  openTravelDetailModal() {
    const modalElement = document.getElementById('travelDetailModal');
    const modalInstance = new (window as any).bootstrap.Modal(modalElement);
    modalInstance.show();
  }

  // increment() {
  //   if (this.offer.freeSeats > this.numberOfReserves) {
  //     this.numberOfReserves++;
  //   }
  // }

  // decrement() {
  //   if (this.numberOfReserves > 0) {
  //     this.numberOfReserves--;
  //   }
  // }
}
