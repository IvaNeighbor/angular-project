import { Component, Input } from '@angular/core';
import { offer } from '../../model/offer.model';
import { CommonModule } from '@angular/common';
import { Data } from '../../services/data';

@Component({
  selector: 'app-travel-detail',
  imports: [CommonModule],
  templateUrl: './travel-detail.html',
  styleUrl: './travel-detail.scss'
})
export class TravelDetail {
  constructor(private dataService: Data) { }
  offers: offer[] = [];
  ngOnInit(): void {
    this.offers = this.dataService.getItems();
  }

  numberOfReserves: number = 0;
  stars = Array.from({ length: 5 });

ngOnChanges() {
  console.log('travel-detail offer', this.offer);
}

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
