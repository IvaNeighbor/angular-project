import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelDetail } from './travel-detail';

describe('TravelDetail', () => {
  let component: TravelDetail;
  let fixture: ComponentFixture<TravelDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
