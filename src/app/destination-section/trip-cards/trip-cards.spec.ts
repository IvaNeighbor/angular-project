import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripCards } from './trip-cards';

describe('TripCards', () => {
  let component: TripCards;
  let fixture: ComponentFixture<TripCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
