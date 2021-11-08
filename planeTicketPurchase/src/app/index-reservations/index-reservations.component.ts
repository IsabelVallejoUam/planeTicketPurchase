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

  ngAfterViewInit(): void{
    this.appendInfo();
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

  transfromTime(min: number, id: number): void {
    var hours = Math.floor(min / 60);          
    var minutes = min % 60;
    var text = document.createTextNode(+hours+"H "+minutes+"Min");
    document.getElementById("duration"+id)?.appendChild(text)
  }

  appendInfo(){
  
    this.reservations.forEach(reservation => {
      this.transfromTime(reservation.flight.duration, reservation.flight.id);
      this.getHoursMinutes(reservation.flight.dateTime, reservation.flight.duration, reservation.flight.id);
      this.getDepDate(reservation.flight.dateTime, reservation.flight.id);
      this.getCityAlias(reservation.flight.id, reservation.flight.departure_airport, reservation.flight.destination_airport);
      this.getAirportName(reservation.flight.id, reservation.flight.departure_airport, reservation.flight.destination_airport);
    });
  }

  getHoursMinutes(date: Date, min:number, id: number): void{
    //Departure TIME
    var hour = date.getHours();
    var minute = date.getMinutes();
    var text = document.createTextNode(hour +":"+ minute);
    document.getElementById("depart-hour"+id)?.appendChild(text)

    //Landing TIME
    var date1 = date.getTime();
    var duration = (min * 60 * 1000);
    var newDateObj = new Date(date1 + duration);
    var hour2 = newDateObj.getHours();
    var minute2 = newDateObj.getMinutes();
    var text2 = document.createTextNode(hour2 +":"+ minute2);
    document.getElementById("landing-hour"+id)?.appendChild(text2)

  }

  getDepDate(date: Date, id:number):void{
    var day = date.getDay();
    var month = date.getMonth()+1;
    var year = date.getFullYear();
    var newDate = day+"/"+month+"/"+year;
    var text = document.createTextNode(newDate);
    document.getElementById("date-flight"+id)?.appendChild(text)
    
  }

  getAirportName(id:number, id1:number, id2:number): void{
    this.airports.forEach(airport => {
      if(airport.id == id1){
        var text = document.createTextNode(airport.name);
            document.getElementById("depart-airport"+id)?.appendChild(text)
      }
      if(airport.id == id2){
        var text = document.createTextNode(airport.name);
            document.getElementById("landing-airport"+id)?.appendChild(text)
      }
    });
  }

  getCityAlias(id:number, airport1: number, airport2: number): void{
    this.airports.forEach(airport => {
      if(airport.id == airport1){
        this.cities.forEach(city => {
          if(city.id == airport.city_id){
            var text = document.createTextNode(city.alias);
            document.getElementById("depart-city"+id)?.appendChild(text)
          };
        });
      }
      if(airport.id == airport2){
        this.cities.forEach(city => {
          if(city.id == airport.city_id){
            var text = document.createTextNode(city.alias);
            document.getElementById("landing-city"+id)?.appendChild(text)
          };
        });
      }
    });
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
