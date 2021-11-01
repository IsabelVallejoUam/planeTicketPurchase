import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchReservationComponent } from './search-reservation.component';

describe('ReservationComponent', () => {
  let component: SearchReservationComponent;
  let fixture: ComponentFixture<SearchReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
