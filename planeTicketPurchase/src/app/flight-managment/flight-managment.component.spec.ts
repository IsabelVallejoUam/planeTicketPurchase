import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightManagmentComponent } from './flight-managment.component';

describe('FlightManagmentComponent', () => {
  let component: FlightManagmentComponent;
  let fixture: ComponentFixture<FlightManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightManagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
