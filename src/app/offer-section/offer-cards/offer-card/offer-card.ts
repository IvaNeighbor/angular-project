import { Component, Input, Output, EventEmitter } from '@angular/core';
import { offer } from '../../../model/offer.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-offer-card',
  imports: [CommonModule, RouterLink],
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

  openTravelDetailModal() {
    this.cardClickEvent.emit(this.offer);

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
