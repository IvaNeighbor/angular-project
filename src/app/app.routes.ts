import { Routes } from '@angular/router';
import { OfferSection } from './offer-section/offer-section';
import { TravelDetail } from './offer-section/travel-detail/travel-detail';

export const routes: Routes = [
    { path: '', redirectTo: 'offers', pathMatch: 'full' },

    { path: 'offers', component: OfferSection },
    
    { path: 'offer/:id', component: TravelDetail },
];
