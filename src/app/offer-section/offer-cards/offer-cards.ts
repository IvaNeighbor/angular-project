import { Component, EventEmitter, Input, Output, OnInit, OnDestroy, OnChanges, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import {offer} from '../../model/offer.model'
import { OfferCard } from "./offer-card/offer-card";
import { Data } from '../../services/data';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-offer-cards',
  imports: [CommonModule, OfferCard],
  templateUrl: './offer-cards.html',
  styleUrl: './offer-cards.scss'
})
export class OfferCards implements OnInit, OnDestroy, OnChanges{
  offers: offer[] = [];
  private subscription: Subscription = new Subscription();
  constructor(private dataService: Data) { }

  ngOnInit(): void {
    this.subscription = this.dataService.getItems().subscribe(data => {
      this.offers = data;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  @Input() searchText: string = "";

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchText']) {
      this.dataService.filterOffers(this.searchText);
    }
  }

  @Output() selectedOfferEvent: EventEmitter<offer> = new EventEmitter<offer>();
  selectedOffer!: offer; 

  onSelectedOffer(offer: offer) {
    this.selectedOffer = offer;
    this.selectedOfferEvent.emit(this.selectedOffer);
  } 

  trackById(id: number, item: offer): number {
    return item.id;
  }
}
