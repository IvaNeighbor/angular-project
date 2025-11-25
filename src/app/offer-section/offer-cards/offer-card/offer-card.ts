import { Component, Input, Output, EventEmitter } from '@angular/core';
import { offer } from '../../../model/offer.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { TruncatePipe } from '../../../pipes/truncate-pipe';
import { Highlight } from '../../../directives/highlight';

@Component({
  selector: 'app-offer-card',
  imports: [CommonModule, RouterLink, TruncatePipe, Highlight],
  templateUrl: './offer-card.html',
  styleUrl: './offer-card.scss'
})
export class OfferCard {
  numberOfReserves: number = 0;
  stars = Array.from({ length: 5 });
  
  @Input() offer!: offer;

  @Output() cardClickEvent = new EventEmitter<offer>();
  
  getDiscountPrice() {
    if (this.offer.discount) {
       return this.offer.price - this.offer.price * this.offer.discount / 100; 
    }
    else {
      return this.offer.price;
    }
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
