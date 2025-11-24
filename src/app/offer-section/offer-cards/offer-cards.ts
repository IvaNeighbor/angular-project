import { Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {offer} from '../../model/offer.model'
import { OfferCard } from "./offer-card/offer-card";
import { Data } from '../../services/data';


@Component({
  selector: 'app-offer-cards',
  imports: [CommonModule, OfferCard],
  templateUrl: './offer-cards.html',
  styleUrl: './offer-cards.scss'
})
export class OfferCards {
  constructor(private dataService: Data) { }
  offers: offer[] = [];
  ngOnInit(): void {
    this.offers = this.dataService.getItems();
  }

  @Output() selectedOfferEvent: EventEmitter<offer> = new EventEmitter<offer>();
  selectedOffer!: offer; 

  onSelectedOffer(offer: offer) {
    this.selectedOffer = offer;
    this.selectedOfferEvent.emit(this.selectedOffer);
  } 

  @Input() searchText: string = "";

  get filteredAndSearchedTravel() {
    if (!this.searchText) {
      return this.offers;
    }
    return this.offers.filter(offer=>offer.country.toLowerCase().includes(this.searchText.toLowerCase()));
  }

  trackById(id: number, item: offer): number {
    return item.id;
  }
}
