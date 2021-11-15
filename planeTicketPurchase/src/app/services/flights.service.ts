import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { FLIGHTS } from '../mock-flights';
import { Airport } from '../models/airport-model';
import { City } from '../models/city-model';
import { Flight } from '../models/flight-model';
import { AirportsService } from './airports.service';
import { CitiesService } from './cities.service';

@Injectable({ providedIn: 'root' })
export class FlightsService {
  airports: Airport[] = [];

  constructor(private airportService: AirportsService) {}

  getAirports(): void {
    this.airportService.getAirports().subscribe((airports: Airport[]) => {
      this.airports = airports;
    });
  }

  getAirportId(cityId: number): Airport[] {
    this.getAirports();
    const airports = this.airports.filter((airport) => airport.city_id == cityId);
    if (airports) {
      return airports;
    }
    return [];
  }

  getFlightsCity(city1: number, city2: number): Observable<Flight[]> {
    this.getAirports();
    var airports1 = this.getAirportId(city1);
    var airports2 = this.getAirportId(city2);

    //HACER UN FOR EACH PARA RECORRER LOS ARREGLOS
    var searchedFlights: Flight[] = [];

    airports1.forEach(element => {
      airports2.forEach(element2 => {
        searchedFlights = FLIGHTS.filter(
          (res) =>(res.departure_airport == element.id && res.destination_airport == element2.id))!;
        return of(searchedFlights);
      });
    });

    return of(searchedFlights);
  }

  getFlights(): Observable<Flight[]> {
    const flight = of(FLIGHTS);
    return flight;
  }

  getFlight(id: number): Observable<Flight> {
    const flight = FLIGHTS.find((f) => f.id === id)!;
    return of(flight);
  }

  deleteFlight(id: number): string {
    for (var i = 0; i < FLIGHTS.length; i++) {
      if (FLIGHTS[i].id === id) {
        FLIGHTS.splice(i, 1);
        i--;
      }
    }
    return 'Vuelo Borrado';
  }

  addFlight(flight: Flight): void {
    FLIGHTS.push(flight);
  }

  updateFlight(flight: Flight){

      let updateItem = FLIGHTS.find((f) => f.id === flight.id)!;
      let index = FLIGHTS.indexOf(updateItem);
      FLIGHTS[index] = flight;
    }
  
}
