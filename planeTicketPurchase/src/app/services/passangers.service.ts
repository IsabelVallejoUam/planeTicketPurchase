import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { PASSANGERS } from '../mock-passanger';
import { Passanger } from '../models/passanger-model';

@Injectable({
  providedIn: 'root'
})
export class PassangerService {

  constructor() { }

  getPassangers(flight_id: number): Observable<Passanger> {
    const passangers = PASSANGERS.find(f => f.flight_reservation === flight_id)!;
    return of(passangers);
  }

}