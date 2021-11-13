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
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
})
export class ReservationComponent implements OnInit {
  constructor(
    private cityService: CitiesService,
    private flightService: FlightsService,
    private airportsService: AirportsService,
    private route: ActivatedRoute,
    private reservationService: ReservationService
  ) {}

  reservation!: Reservation;
  flight!: Flight;
  passangers!: Passanger[];
  services!: Service[];
  cities: City[] = [];
  airports: Airport[] = [];

  ngOnInit(): void {
    this.getReservation();
    this.getCities();
    this.getAirports();
  }

  ngAfterViewInit(): void {
  }

  getReservation(): void {
    const id = String(this.route.snapshot.paramMap.get('code'));
    this.reservationService
      .getReservation(id)
      .subscribe((reservation) => (this.reservation = reservation));

    this.flight = this.reservation.flight;
    this.passangers = this.reservation.passangers;
    this.services = this.reservation.Service;
  }

  getFlights(): void {
    this.flightService.getFlight(this.flight.id).subscribe((flights) => {
      this.flight = flights;
    });
  }

  getCities(): void {
    this.cityService.getCities().subscribe((cities) => {
      this.cities = cities;
    });
  }

  getAirports(): void {
    this.airportsService.getAirports().subscribe((airports) => {
      this.airports = airports;
    });
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


  getCityAlias(airportID: number): string {
    let airport = this.airports.find(airport => airport.id == airportID);
    let city =  this.cities.find(city => city.id == airport!.city_id);
    return city!.alias;
  }


  cancelReservation() {
    window.alert('RESERVA BORRADA    ' + this.reservation.code);
    this.reservationService.deleteReservation(this.reservation.code);
    
  }
}
