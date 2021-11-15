import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Flight } from '../models/flight-model';
import { Reservation } from '../models/reservation-model';
import { ReservationService } from '../services/reservations.service';

import { City } from '../models/city-model';
import { Airport } from '../models/airport-model';
import { AirportsService } from '../services/airports.service';
import { CitiesService } from '../services/cities.service';
import { FlightsService } from '../services/flights.service';
import { Passanger } from '../models/passanger-model';
import { Service } from '../models/service-model';

@Component({
  selector: 'app-index-reservations',
  templateUrl: './index-reservations.component.html',
  styleUrls: ['./index-reservations.component.css']
})
export class IndexReservationsComponent implements OnInit {

  constructor(private cityService:CitiesService, private flightService:FlightsService, private airportsService:AirportsService, private route: ActivatedRoute, private reservationService: ReservationService,) {  }

  reservations!: Reservation[];
  cities: City[] = [];
  airports: Airport[] = [];

  ngOnInit(): void {
    this.getReservations();
    this.getCities();
    this.getAirports();
  }

  
  getReservations(): void {
    const id = 1; //el usuario loggeado
    this.reservationService.getReservations(id).subscribe(reservation => this.reservations = reservation);
  }

  getCities(): void {
    this.cityService.getCities().subscribe(cities => {this.cities = cities});
  }

  getAirports(): void {
    this.airportsService.getAirports().subscribe(airports => {this.airports = airports});
  }

  transfromTime(min: number): string {
    var hours = Math.floor(min / 60);          
    var minutes = min % 60;
    var text = ("Duracion vuelo: "+hours+"H "+minutes+"Min");
    return text;
  }

  getLandingTime(date: Date, min:number ): Date {
    var date1 = date.getTime();
    var duration = (min * 60 * 1000);
    var newDateObj = new Date(date1 + duration);
    return newDateObj;

  }
  
  getAirportName(airportID:number): string{
    let airport = this.airports.find(airport => airport.id == airportID);
      return airport!.name;
  }

  getCityAlias(airportID: number): string {
    let airport = this.airports.find(airport => airport.id == airportID);
    let city =  this.cities.find(city => city.id == airport!.city_id);
    return city!.alias;
  }

  cancelReservation(code: string) {
    window.alert('RESERVA BORRADA   ' + code);
    this.reservationService.deleteReservation(code);

    for( var i = 0; i < this.reservations.length; i++){ 
                                   
      if ( this.reservations[i].code === code) { 
        this.reservations.splice(i, 1); 
          i--; 
      }
  }

  }
}
