import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { offer } from '../../model/offer.model';
import { CommonModule } from '@angular/common';
import { Data } from '../../services/data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-travel-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './travel-detail.html',
  styleUrl: './travel-detail.scss'
})
export class TravelDetail implements OnInit, OnDestroy {
  offer: offer | undefined;
  stars = Array.from({ length: 5 });
  numberOfReserves: number = 0;
  private sub: Subscription = new Subscription();
  
  constructor(
    private dataService: Data,
    private route: ActivatedRoute 
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      const httpSub = this.dataService.getOfferById(id).subscribe({
        next: (data) => {
          this.offer = data;
        },
        error: (err) => {
           console.error(err);
        }
      });
      this.sub.add(httpSub);
    }
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
  
  getDiscountPrice() {
    if (this.offer && this.offer.discount) {
       return this.offer.price - this.offer.price * this.offer.discount / 100; 
    }
    return this.offer ? this.offer.price : 0;
  }

  increment() {
    if (this.offer && this.offer.freeSeats > this.numberOfReserves) {
      this.numberOfReserves++;
    }
  }

  decrement() {
    if (this.numberOfReserves > 0) {
      this.numberOfReserves--;
    }
  }
}
