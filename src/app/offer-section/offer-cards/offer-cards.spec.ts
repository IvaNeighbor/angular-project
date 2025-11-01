import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferCards } from './offer-cards';

describe('OfferCards', () => {
  let component: OfferCards;
  let fixture: ComponentFixture<OfferCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
