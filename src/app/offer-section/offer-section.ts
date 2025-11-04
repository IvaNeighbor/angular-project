import { Component } from '@angular/core';
import { OfferCards } from "./offer-cards/offer-cards";


@Component({
  selector: 'app-offer-section',
  imports: [OfferCards],
  templateUrl: './offer-section.html',
  styleUrl: './offer-section.scss'
})
export class OfferSection {
}
