import { Component, OnInit } from '@angular/core';
import { City } from '../models/city-model';
import { Flight } from '../models/flight-model';

import { Airport } from '../models/airport-model';
import { AirportsService } from '../services/airports.service';
import { CitiesService } from '../services/cities.service';
import { FlightsService } from '../services/flights.service';

@Component({
  selector: 'app-update-flights',
  templateUrl: './update-flights.component.html',
  styleUrls: ['./update-flights.component.css']
})
export class UpdateFlightsComponent implements OnInit {

  flights: Flight[] = [];
  cities: City[] = [];
  airports: Airport[] = [];

  constructor(private cityService:CitiesService, private flightService:FlightsService, private airportsService:AirportsService) { }

  ngOnInit() {
    this.getCities();
    this.getFlights();
    this.getAirports();
  }

  getFlights(): void {
    this.flightService.getFlights().subscribe(flights => {this.flights = flights});
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


  getCityAlias(airportID: number): string {
    let airport = this.airports.find(airport => airport.id == airportID);
    let city =  this.cities.find(city => city.id == airport!.city_id);
    return city!.alias;
  }

}
