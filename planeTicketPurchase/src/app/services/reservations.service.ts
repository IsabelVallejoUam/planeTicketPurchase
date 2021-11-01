import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { RESERVATIONS } from '../mock-reservations';
import { Reservation } from '../models/reservation-model';



@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor() { }
  
  //ESTA RETORNANDO UN OBSERVABLE NO UNA SUSCRIPCION
  getReservations(id: number): Observable<Reservation[]> {
    //const reservations = of(RESERVATIONS);
    const reservations = RESERVATIONS.filter(res => res.ownedby == id)!;
    return of(reservations);
  }

  


  getReservation(code: string): Observable<Reservation> {
    const reservation = RESERVATIONS.find(r => r.code === code)!;
    return of(reservation);
  }

}

