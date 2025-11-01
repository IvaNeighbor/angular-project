import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {offer} from '../../model/offer.model'
import { OfferCard } from "./offer-card/offer-card";


@Component({
  selector: 'app-offer-cards',
  imports: [CommonModule, OfferCard],
  templateUrl: './offer-cards.html',
  styleUrl: './offer-cards.scss'
})
export class OfferCards {
offers: offer[] = [
  {
    id: 1,
    country: 'Lisbon, Portugal',
    description: '5 nights and 4 days in a 5-star hotel with ocean view, breakfast and lunch included.',
    price: 500,
    bgImage: 'assets/images/offer-card-Portugal.jpg',
    freeSeats: 0
  },
  {
    id: 2,
    country: 'Athens, Greece',
    description: 'Explore ancient history with a stay in a 5-star hotel near the Acropolis.',
    price: 800,
    discount: 2.7,
    bgImage: 'assets/images/offer-card-Greece.jpg',
    freeSeats: 5
  },
  {
    id: 3,
    country: 'Rome, Italy',
    description: '5 nights in the heart of Rome, half-board with free Colosseum tour.',
    price: 750,
    discount: 5.7,
    bgImage: 'assets/images/offer-card-Italy.jpg',
    freeSeats: 3
  },
  {
    id: 4,
    country: 'Paris, France',
    description: 'Romantic weekend for two in a luxury Paris hotel. Breakfast and wine tasting included.',
    price: 950,
    discount: 10,
    bgImage: 'assets/images/offer-card-Pore.jpg',
    freeSeats: 6
  },
  {
    id: 5,
    country: 'Barcelona, Spain',
    description: '7 days in a beachfront resort with daily excursions and full board.',
    price: 670,
    discount: 6.5,
    bgImage: 'assets/images/offer-card-Spain.jpg',
    freeSeats: 8
  },
  {
    id: 6,
    country: 'Prague, Czech Republic',
    description: '3 nights in the old town with breakfast, local beer tour included.',
    price: 400,
    discount: 4.3,
    bgImage: 'assets/images/offer-card-Czech.jpg',
    freeSeats: 10
  },
  {
    id: 7,
    country: 'Vienna, Austria',
    description: 'Elegant city break with opera tickets and 4-star accommodation.',
    price: 720,
    discount: 5.1,
    bgImage: 'assets/images/offer-card-Austria.jpg',
    freeSeats: 4
  },
  {
    id: 8,
    country: 'Zurich, Switzerland',
    description: 'Luxury 5-day stay with mountain excursions and spa access.',
    price: 1100,
    discount: 7.8,
    bgImage: 'assets/images/offer-card-Switzerland.jpg',
    freeSeats: 0
  },
  {
    id: 9,
    country: 'Budapest, Hungary',
    description: 'Relaxing 4-day spa retreat with thermal baths and guided city tour.',
    price: 560,
    discount: 3.4,
    bgImage: 'assets/images/offer-card-Hungary.jpg',
    freeSeats: 7
  },
  {
    id: 10,
    country: 'Amsterdam, Netherlands',
    description: '5-day stay with canal cruise and local cuisine experiences.',
    price: 820,
    discount: 4.9,
    bgImage: 'assets/images/offer-card-Netherlands.jpg',
    freeSeats: 2
  },
  {
    id: 11,
    country: 'Oslo, Norway',
    description: 'Winter trip with northern lights tour and cozy cabin hotel.',
    price: 980,
    discount: 8.5,
    bgImage: 'assets/images/offer-card-Norway.jpg',
    freeSeats: 5
  },
  {
    id: 12,
    country: 'Dubrovnik, Croatia',
    description: 'Summer resort on the Adriatic coast, 6 nights with breakfast and sea view.',
    price: 640,
    discount: 6.0,
    bgImage: 'assets/images/offer-card-Croatia.jpg',
    freeSeats: 9
  }
];


  trackById(id: number, item: offer): number {
    return item.id;
  }
}
