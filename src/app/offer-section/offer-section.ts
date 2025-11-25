import { Component } from '@angular/core';
import { OfferCards } from "./offer-cards/offer-cards";
import { TravelDetail } from "./travel-detail/travel-detail";
import { Search } from "./search/search";
import { offer } from '../model/offer.model';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-offer-section',
  imports: [OfferCards, Search, TravelDetail, RouterLink],
  templateUrl: './offer-section.html',
  styleUrl: './offer-section.scss'
})
export class OfferSection {
  searchText: string = '';
  selectedOffer!: offer;

  getSearchText(value: string) {
    this.searchText = value;
  }

  setSelectedOffer(value: offer) {
    this.selectedOffer = value;
  }
}
