import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferSection } from './offer-section';

describe('OfferSection', () => {
  let component: OfferSection;
  let fixture: ComponentFixture<OfferSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
