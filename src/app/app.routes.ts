import { Routes } from '@angular/router';
import { OfferSection } from './offer-section/offer-section';
import { TravelDetail } from './offer-section/travel-detail/travel-detail';
import { CreateOffer } from './offer-section/create-offer/create-offer';

export const routes: Routes = [
    { path: '', redirectTo: 'offers', pathMatch: 'full' },

    { path: 'offers', component: OfferSection },
    
    { path: 'create', component: CreateOffer },

    { path: 'offer/:id', component: TravelDetail },
];
