import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { RESERVATIONS } from '../mock-reservations';
import { Reservation } from '../models/reservation-model';



@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor() { }
  
  getReservations(id: number): Observable<Reservation[]> {
    const reservations = RESERVATIONS.filter(res => res.ownedby == id)!;
    return of(reservations);
  }



  getReservation(code: string): Observable<Reservation> {
    const reservation = RESERVATIONS.find(r => r.code === code)!;
    return of(reservation);
  }

  deleteReservation(code: string): string {
    for( var i = 0; i < RESERVATIONS.length; i++){ 
                                   
      if ( RESERVATIONS[i].code === code) { 
        RESERVATIONS.splice(i, 1); 
          i--; 
      }
  }
  return "Reserva Borrada";
  }

  addReservation(reservation: Reservation): void {
      RESERVATIONS.push(reservation);
  }

}

