import { Component, Input } from '@angular/core';
import {offer} from '../../../model/offer.model'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-offer-card',
  imports: [CommonModule],
  templateUrl: './offer-card.html',
  styleUrl: './offer-card.scss'
})
export class OfferCard {
  numberOfReserves: number = 0;

  @Input() offer!: offer;
  
  getDiscountPrice() {
    if (this.offer.discount) {
       return this.offer.price - this.offer.price * this.offer.discount / 100; 
    }
    else {
      return this.offer.price;
    }
  }

  increment() {
    if (this.offer.freeSeats > this.numberOfReserves) {
      this.numberOfReserves++;
    }
  }

  decrement() {
    if (this.numberOfReserves > 0) {
      this.numberOfReserves--;
    }
  }
}
