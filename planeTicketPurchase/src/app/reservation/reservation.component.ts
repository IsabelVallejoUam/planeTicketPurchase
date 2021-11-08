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
    this.appendInfo();
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

  transfromTime(min: number, id: number): void {
    var hours = Math.floor(min / 60);
    var minutes = min % 60;
    var text = document.createTextNode(+hours + 'H ' + minutes + 'Min');
    document.getElementById('duration' + id)?.appendChild(text);
  }

  appendInfo() {
    this.transfromTime(this.flight.duration, this.flight.id);
    this.getHoursMinutes(
      this.flight.dateTime,
      this.flight.duration,
      this.flight.id
    );
    this.getDepDate(this.flight.dateTime, this.flight.id);
    this.getCityAlias(
      this.flight.id,
      this.flight.departure_airport,
      this.flight.destination_airport
    );
    this.getAirportName(
      this.flight.departure_airport,
      this.flight.destination_airport
    );
  }

  getHoursMinutes(date: Date, min: number, id: number): void {
    //Departure TIME
    var hour = date.getHours();
    var minute = date.getMinutes();
    var text = document.createTextNode(hour + ':' + minute);
    document.getElementById('depart-hour' + id)?.appendChild(text);

    //Landing TIME
    var date1 = date.getTime();
    var duration = min * 60 * 1000;
    var newDateObj = new Date(date1 + duration);
    var hour2 = newDateObj.getHours();
    var minute2 = newDateObj.getMinutes();
    var text2 = document.createTextNode(hour2 + ':' + minute2);
    document.getElementById('landing-hour' + id)?.appendChild(text2);
  }

  getDepDate(date: Date, id: number): void {
    var day = date.getDay();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var newDate = day + '/' + month + '/' + year;
    var text = document.createTextNode(newDate);
    document.getElementById('date-flight' + id)?.appendChild(text);
  }

  getAirportName(id1: number, id2: number): void {
    this.airports.forEach((airport) => {
      if (airport.id == id1) {
        var text = document.createTextNode(airport.name);
        document.getElementById('depart-airport')?.appendChild(text);
      }
      if (airport.id == id2) {
        var text = document.createTextNode(airport.name);
        document.getElementById('landing-airport')?.appendChild(text);
      }
    });
  }

  getCityAlias(id: number, airport1: number, airport2: number): void {
    this.airports.forEach((airport) => {
      if (airport.id == airport1) {
        this.cities.forEach((city) => {
          if (city.id == airport.city_id) {
            var text = document.createTextNode(city.alias);
            document.getElementById('depart-city' + id)?.appendChild(text);
          }
        });
      }
      if (airport.id == airport2) {
        this.cities.forEach((city) => {
          if (city.id == airport.city_id) {
            var text = document.createTextNode(city.alias);
            document.getElementById('landing-city' + id)?.appendChild(text);
          }
        });
      }
    });
  }

  cancelReservation() {
    window.alert('RESERVA BORRADA    ' + this.reservation.code);
    this.reservationService.deleteReservation(this.reservation.code);
    
  }
}
