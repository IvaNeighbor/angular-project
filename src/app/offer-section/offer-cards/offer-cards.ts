import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import {offer} from '../../model/offer.model'
import { OfferCard } from "./offer-card/offer-card";
import { Data } from '../../services/data';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-offer-cards',
  imports: [CommonModule, OfferCard],
  templateUrl: './offer-cards.html',
  styleUrl: './offer-cards.scss'
})
export class OfferCards implements OnInit, OnChanges{
  offers$: Observable<offer[]> | undefined;
  constructor(private dataService: Data) { }

  ngOnInit(): void {
    this.offers$ = this.dataService.getItems();
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
    this.selectedOfferEvent.emit(offer);
  } 

  trackById(id: number, item: offer): number {
    return item.id;
  }
}
