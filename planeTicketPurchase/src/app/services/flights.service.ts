import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { FLIGHTS } from '../mock-flights';
import { Flight } from '../models/flight-model';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor() { }

  getFlights(): Observable<Flight[]> {
    const flight = of(FLIGHTS);
    return flight;
  }

  getFlight(id: number): Observable<Flight> {
    const flight = FLIGHTS.find(f => f.id === id)!;
    return of(flight);
  }

}