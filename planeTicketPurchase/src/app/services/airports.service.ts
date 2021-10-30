import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AIRPORTS } from '../mock-airport';
import { Airport } from '../models/airport-model';

@Injectable({
  providedIn: 'root'
})
export class AirportsService {

  constructor() { }
  
  getAirports(): Observable<Airport[]> {
    const airport = of(AIRPORTS);
    return airport;
  }

  getAirport(id: number): Observable<Airport> {
    const airport = AIRPORTS.find(a => a.id === id)!;
    return of(airport);
  }

}
