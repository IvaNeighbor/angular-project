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

  @Input() searchText: string = "";
  
  @Output() selectedOfferEvent: EventEmitter<offer> = new EventEmitter<offer>();
  selectedOffer!: offer;

  constructor(private dataService: Data) { }

  ngOnInit(): void {
    this.offers$ = this.dataService.getItems();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchText']) {
      console.log('🔍 Пошук за запитом:', this.searchText);
      this.offers$ = this.dataService.getItems(this.searchText);
    }
  }

  onSelectedOffer(offer: offer) {
    this.selectedOfferEvent.emit(offer);
  } 

  trackById(index: number, item: offer): number | string {
    return item.id;
  }
}
