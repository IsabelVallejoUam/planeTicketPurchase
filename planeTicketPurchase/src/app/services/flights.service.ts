import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { FLIGHTS } from '../mock-flights';
import { Airport } from '../models/airport-model';
import { City } from '../models/city-model';
import { Flight } from '../models/flight-model';
import { AirportsService } from './airports.service';
import { CitiesService } from './cities.service';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  
  airports: Airport[] = [];


  constructor(  private airportService: AirportsService) { }


  getAirports(): void {
    this.airportService.getAirports().subscribe(airports => {this.airports = airports});
  }

  getAirportId( cityId: number): any {
    console.log("busco air");
    this.airports.forEach(airport => {
      if(airport.city_id == cityId){
        console.log("encontre"+ airport.id);
        return airport.id;
      }
      return 0;
    });
  }

  getFlightsCity(city1: number, city2: number): Observable<Flight[]> {
    this.getAirports();
    var airport1 = this.getAirportId(city1);
    console.log(city1+"airpoert="+airport1);
    var airport2 = this.getAirportId(city2);
    //airports sale undefined :s
    const flights = FLIGHTS.filter(res => (res.departure_airport == 2 && res.destination_airport == 3 ))!;
    return of(flights);
  }



  getFlights(): Observable<Flight[]> {
    const flight = of(FLIGHTS);
    return flight;
  }

  getFlight(id: number): Observable<Flight> {
    const flight = FLIGHTS.find(f => f.id === id)!;
    return of(flight);
  }

  deleteFlight(id: number): string {
    for( var i = 0; i < FLIGHTS.length; i++){ 
                                   
      if ( FLIGHTS[i].id === id) { 
        FLIGHTS.splice(i, 1); 
          i--; 
      }
  }
  return "Reserva Borrada";
  }

  addFlight(flight: Flight): void {
    FLIGHTS.push(flight);
}

}