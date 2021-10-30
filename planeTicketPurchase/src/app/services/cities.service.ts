import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CITIES } from '../mock-city';
import { City } from '../models/city-model';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor() { }

  getCities(): Observable<City[]> {
    const city = of(CITIES);
    return city;
  }

  getCity(id: number): Observable<City> {
    const city = CITIES.find(c => c.id === id)!;
    return of(city);
  }

}
