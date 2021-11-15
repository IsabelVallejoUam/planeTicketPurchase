import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AIRPLANES } from '../mock-airplane';
import { Airplane } from '../models/airplane-model';



@Injectable({
  providedIn: 'root'
})
export class AirplaneService {

  constructor() { }
  
  getAirplanes(): Observable<Airplane[]> {
    const airplanes = of(AIRPLANES);
    return airplanes;
  }

  getAirplane(id: number): Observable<Airplane> {
    const airplane = AIRPLANES.find(a => a.id == id)!;
    return of(airplane);
  }

}

