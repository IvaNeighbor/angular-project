import { Routes } from '@angular/router';
import { OfferSection } from './offer-section/offer-section';
import { TravelDetail } from './offer-section/travel-detail/travel-detail';
import { CreateOffer } from './offer-section/create-offer/create-offer';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    { path: '', redirectTo: 'offers', pathMatch: 'full' },

    { path: 'offers', component: OfferSection },
    
    { path: 'create', component: CreateOffer, canActivate: [authGuard] },

    { path: 'offer/:id', component: TravelDetail },

    { path: 'login', component: Login },
    { path: 'register', component: Register },
];
